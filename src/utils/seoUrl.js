// The SEO API matches the `url` string EXACTLY. Most stored keys have no trailing
// slash, but a few do. This normalizer maps a react-router `location.pathname`
// to the exact stored key so lookups always hit.

// Keys stored WITH a trailing slash in the dashboard.
const TRAILING_SLASH_KEYS = new Set(["/", "/about-us/", "/contact-us/"]);

/**
 * Normalize a pathname to the exact SEO key stored in the admin dashboard.
 * - "/", "/about-us/", "/contact-us/" keep their trailing slash.
 * - Every other path is returned without a trailing slash.
 *
 * @param {string} pathname - e.g. location.pathname
 * @returns {string} exact SEO key
 */
export function normalizeSeoUrl(pathname) {
  if (!pathname || pathname === "/") return "/";

  const withSlash = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (TRAILING_SLASH_KEYS.has(withSlash)) return withSlash;

  const withoutSlash = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  return withoutSlash || "/";
}

export default normalizeSeoUrl;
