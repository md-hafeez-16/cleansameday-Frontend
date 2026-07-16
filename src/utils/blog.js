import { getEmbeddedImageAlt, getImageUrl } from "./imageAlt";

export function getFeaturedImageUrl(featuredImage) {
  const url = getImageUrl(featuredImage);
  return url || null;
}

export function getFeaturedImageAlt(featuredImage, fallbackTitle = "Blog post") {
  if (typeof featuredImage === "string") return fallbackTitle;
  return getEmbeddedImageAlt(featuredImage) || fallbackTitle;
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
