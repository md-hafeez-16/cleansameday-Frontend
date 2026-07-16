import { useNavigate } from "react-router-dom";

const BlogContent = ({ html, className = "" }) => {
  const navigate = useNavigate();

  if (!html) return null;

  const handleContentClick = (event) => {
    const anchor = event.target.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (href && href.startsWith("/")) {
      event.preventDefault();
      navigate(href);
    }
  };

  return (
    <div
      className={`seo-content blog-content ${className}`.trim()}
      onClick={handleContentClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default BlogContent;
