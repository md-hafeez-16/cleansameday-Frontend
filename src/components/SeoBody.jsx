/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useSeo } from "../hooks/useSeo";

/**
 * Renders the admin-managed page body.
 *
 * - When the SEO entry has non-empty `content` (sanitized rich HTML), it is
 *   rendered directly (H2–H6, bold/italic/underline, lists, internal links,
 *   images with alt). Otherwise `fallbackBody` (the page's existing markup) shows.
 * - Optionally renders the page's single <h1> from `seo.h1 || defaults.h1`.
 * - Internal links inside the content are routed through react-router to avoid
 *   full page reloads.
 *
 * `content` is ALREADY sanitized server-side — it is rendered as-is.
 *
 * @param {string} url - EXACT SEO key for this page.
 * @param {{ h1?: string }} defaults
 * @param {React.ReactNode} [fallbackBody] - existing page body, shown when no content.
 * @param {boolean} [renderH1=false] - render the <h1> here (page handles it otherwise).
 * @param {string} [h1ClassName] - className for the rendered <h1>.
 * @param {string} [contentClassName] - extra classes on the content wrapper.
 */
export default function SeoBody({
  url,
  defaults = {},
  fallbackBody = null,
  renderH1 = false,
  h1ClassName = "",
  contentClassName = "",
}) {
  const seo = useSeo(url);
  const navigate = useNavigate();

  const h1 = seo?.h1 || defaults.h1 || "";
  const content = seo?.content || "";

  const handleContentClick = (e) => {
    const anchor = e.target.closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (href && href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <>
      {renderH1 && h1 ? <h1 className={h1ClassName}>{h1}</h1> : null}
      {content ? (
        <div
          className={`seo-content ${contentClassName}`.trim()}
          onClick={handleContentClick}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        fallbackBody
      )}
    </>
  );
}
