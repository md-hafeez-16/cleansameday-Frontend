export function getFeaturedImageUrl(featuredImage) {
  if (!featuredImage) return null;
  if (typeof featuredImage === "string") return featuredImage;
  return featuredImage.url || null;
}

export function getFeaturedImageAlt(featuredImage, fallbackTitle = "Blog post") {
  if (!featuredImage) return fallbackTitle;
  if (typeof featuredImage === "string") return fallbackTitle;
  return featuredImage.alt || fallbackTitle;
}

export function formatBlogDate(isoDate) {
  if (!isoDate) return "";
  return new Date(isoDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function truncateText(text, maxLength = 160) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}
