/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { useSeo } from "../hooks/useSeo";

const SITE_URL = "https://cleansameday.com";

/**
 * Renders admin-managed <title>/<meta> tags for a page, falling back to the
 * page's existing hardcoded defaults whenever the dashboard value is missing.
 *
 * @param {string} url - EXACT SEO key for this page (e.g. "/about-us/").
 * @param {{ title?: string, description?: string, keywords?: string[] }} defaults
 * @param {string} [canonicalPath] - Optional path for the canonical URL.
 */
export default function SeoHead({ url, defaults = {}, canonicalPath }) {
  const seo = useSeo(url);

  const title = seo?.title || defaults.title || "";
  const description = seo?.description || defaults.description || "";
  const keywords =
    seo?.keywords?.length ? seo.keywords : defaults.keywords || [];
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
