import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { redirectMap } from "../src/utils/redirectMap.js";

const SITE_URL = "https://cleansameday.com";
const API_BASE = "https://cleansameday.com:4000/api/service";
const BLOG_API_BASE = "https://cleansameday.com:4000/api/blog";

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-us", priority: "0.8", changefreq: "monthly" },
  {
    path: "/deep-cleaning-services-in-dubai",
    priority: "0.9",
    changefreq: "weekly",
  },
  { path: "/contact-us", priority: "0.7", changefreq: "monthly" },
  { path: "/gallery", priority: "0.6", changefreq: "monthly" },
  { path: "/blog", priority: "0.7", changefreq: "weekly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/helpcenter", priority: "0.5", changefreq: "monthly" },
];

const SERVICE_ROUTE = {
  priority: "0.8",
  changefreq: "weekly",
};

async function fetchBlogSlugs() {
  try {
    const response = await fetch(`${BLOG_API_BASE}/getPublished`);
    if (!response.ok) return [];

    const data = await response.json();
    const posts = data?.success && Array.isArray(data.data) ? data.data : [];

    return posts
      .filter((post) => post.slug)
      .map((post) => ({
        path: `/blog/${post.slug}`,
        priority: "0.6",
        changefreq: "monthly",
      }));
  } catch {
    return [];
  }
}

async function fetchServiceSlugs() {
  const endpoints = [
    `${API_BASE}/getAllDeepCleaningServices`,
    `${API_BASE}/getAllCleaningServices`,
    `${API_BASE}/getAllServices`,
  ];

  const slugs = new Set();

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) continue;

      const data = await response.json();
      const services = data.services || data.serviceDoc || [];

      for (const service of services) {
        if (service.slug) slugs.add(service.slug);
      }
    } catch {
      // Fall back to redirectMap below if all requests fail.
    }
  }

  return slugs;
}

function getFallbackServiceSlugs() {
  return new Set(
    Object.values(redirectMap).filter(
      (path) =>
        path.startsWith("/") &&
        !["/about-us", "/contact-us", "/deep-cleaning-services-in-dubai"].includes(
          path
        )
    )
  );
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemap(routes) {
  const lastmod = new Date().toISOString().split("T")[0];

  const urls = routes
    .map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${path}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  let serviceSlugs = await fetchServiceSlugs();

  if (serviceSlugs.size === 0) {
    serviceSlugs = getFallbackServiceSlugs();
    console.warn("API unavailable — using redirectMap fallback for service URLs.");
  }

  const serviceRoutes = [...serviceSlugs]
    .sort()
    .map((slug) => ({
      path: `/${slug}`,
      ...SERVICE_ROUTE,
    }));

  const blogRoutes = await fetchBlogSlugs();
  const routes = [...STATIC_ROUTES, ...blogRoutes, ...serviceRoutes];
  const sitemap = buildSitemap(routes);

  const outputPath = join(
    dirname(fileURLToPath(import.meta.url)),
    "../public/sitemap.xml"
  );

  writeFileSync(outputPath, sitemap, "utf8");
  console.log(`Generated sitemap with ${routes.length} URLs → public/sitemap.xml`);
}

main().catch((error) => {
  console.error("Failed to generate sitemap:", error);
  process.exit(1);
});
