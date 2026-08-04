/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { useSeoState } from "../hooks/useSeo";

const SITE_URL = "https://cleansameday.com";

/**
 * Renders admin-managed <title>/<meta> tags for a page, falling back to the
 * page's existing hardcoded defaults whenever the dashboard value is missing.
 *
 * Defaults are applied only AFTER the SEO API responds so we don't flash
 * service.name (or other fallbacks) while admin meta is still loading.
 *
 * @param {string} url - EXACT SEO key for this page (e.g. "/about-us/").
 * @param {object|null} [seo] - Pre-fetched SEO (skips internal fetch when provided).
 * @param {boolean} [seoLoaded] - Pass with `seo` when parent already fetched.
 * @param {{ title?: string, description?: string, keywords?: string[] }} defaults
 * @param {string} [canonicalPath] - Optional path for the canonical URL.
 */
export default function SeoHead({
  url,
  seo: seoProp,
  seoLoaded: seoLoadedProp,
  defaults = {},
  canonicalPath,
}) {
  const internal = useSeoState(seoProp !== undefined ? null : url);
  const seo = seoProp !== undefined ? seoProp : internal.seo;
  const seoLoaded = seoLoadedProp !== undefined ? seoLoadedProp : internal.loaded;

  const title = seoLoaded ? seo?.title || defaults.title || "" : "";
  const description = seoLoaded
    ? seo?.description || defaults.description || ""
    : "";
  const keywords = seoLoaded
    ? seo?.keywords?.length
      ? seo.keywords
      : defaults.keywords || []
    : [];
  const canonical = canonicalPath != null ? `${SITE_URL}${canonicalPath}` : null;

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}
