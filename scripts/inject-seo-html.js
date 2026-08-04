/**
 * Post-build: inject admin SEO meta into static HTML for each route.
 * Google reads the initial HTML — React Helmet alone is not enough for SPAs.
 *
 * Creates dist/{path}/index.html so nginx try_files serves meta before the SPA.
 */
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const SITE_URL = "https://cleansameday.com";
const API_BASE =
  process.env.VITE_APP_BASE_URL || "https://cleansameday.com:4000/api";

function escapeAttr(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function normalizeSeoUrl(pathname) {
  if (!pathname || pathname === "/") return "/";
  const trailing = new Set(["/", "/about-us/", "/contact-us/"]);
  const withSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (trailing.has(withSlash)) return withSlash;
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function pathnameFromLoc(loc) {
  try {
    return new URL(loc).pathname;
  } catch {
    return null;
  }
}

async function fetchSitemapPaths() {
  const res = await fetch(`${API_BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => pathnameFromLoc(m[1]))
    .filter(Boolean);
  return [...new Set(paths)];
}

async function fetchSeoMeta(urlKey) {
  const res = await fetch(
    `${API_BASE}/seo/get?url=${encodeURIComponent(urlKey)}`
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json?.data ?? null;
}

async function fetchBlogMeta(slug) {
  try {
    const res = await fetch(
      `${API_BASE}/blog/getBySlug?slug=${encodeURIComponent(slug)}`
    );
    if (!res.ok) return null;
    const json = await res.json();
    const post = json?.data ?? json?.post;
    if (!post || post.status !== "published") return null;
    return {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt || post.title,
      keywords: post.metaKeywords || [],
    };
  } catch {
    return null;
  }
}

/** Fallback meta when dashboard SEO entry is missing (matches page defaults). */
const STATIC_FALLBACKS = {
  "/gallery": {
    title: "Cleaning Services Gallery in Dubai | Cleansameday",
    description:
      "See the quality and care we bring to every home and office in Dubai.",
  },
  "/blog": {
    title: "Blog | Clean Same Day",
    description:
      "Cleaning tips and expert guides from Dubai cleaning professionals.",
  },
  "/privacy": {
    title: "Privacy Policy | Cleansameday",
    description: "Privacy policy for Clean Same Day cleaning services in Dubai.",
  },
  "/terms": {
    title: "Terms and Conditions | Cleansameday",
    description: "Terms and conditions for Clean Same Day Dubai.",
  },
  "/helpcenter": {
    title: "Help Center | Cleansameday",
    description: "Help and support for Clean Same Day customers in Dubai.",
  },
};

function injectMeta(html, { title, description, keywords, canonical }) {
  const safeTitle = escapeAttr(title);
  const safeDesc = escapeAttr(description);
  const safeCanonical = escapeAttr(canonical);
  const keywordTag =
    keywords?.length > 0
      ? `\n    <meta name="keywords" content="${escapeAttr(keywords.join(", "))}" />`
      : "";

  let out = html.replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`);

  // Strip previously injected SEO block (re-build safe).
  out = out.replace(
    /\n?\s*<!-- injected-seo -->[\s\S]*?<!-- \/injected-seo -->/,
    ""
  );

  const block = `
    <!-- injected-seo -->
    <meta name="description" content="${safeDesc}" />${keywordTag}
    <link rel="canonical" href="${safeCanonical}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:url" content="${safeCanonical}" />
    <meta property="og:type" content="website" />
    <!-- /injected-seo -->`;

  return out.replace("</title>", `</title>${block}`);
}

function writeRouteHtml(baseTemplate, pathname, meta) {
  const canonical = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const html = injectMeta(baseTemplate, { ...meta, canonical });

  if (pathname === "/") {
    fs.writeFileSync(path.join(DIST, "index.html"), html);
    return;
  }

  const segments = pathname.replace(/^\/|\/$/g, "");
  if (!segments) return;

  const dir = path.join(DIST, segments);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

async function resolveMetaForPath(pathname) {
  const seoKey = normalizeSeoUrl(pathname);
  const seo = await fetchSeoMeta(seoKey);

  if (seo?.title) {
    return {
      title: seo.title,
      description: seo.description || seo.title,
      keywords: seo.keywords || [],
    };
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch) {
    const blog = await fetchBlogMeta(blogMatch[1]);
    if (blog?.title) return blog;
  }

  const fallback = STATIC_FALLBACKS[normalizeSeoUrl(pathname)];
  if (fallback) return { ...fallback, keywords: [] };

  return null;
}

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error("dist/ not found — run vite build first.");
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
  const paths = await fetchSitemapPaths();
  let written = 0;
  let skipped = 0;

  for (const pathname of paths) {
    const meta = await resolveMetaForPath(pathname);
    if (!meta?.title) {
      console.warn(`  skip (no SEO): ${pathname}`);
      skipped += 1;
      continue;
    }
    writeRouteHtml(baseTemplate, pathname, meta);
    console.log(`  ✓ ${pathname} → "${meta.title}"`);
    written += 1;
  }

  console.log(`\nInjected SEO HTML for ${written} route(s) (${skipped} skipped).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
