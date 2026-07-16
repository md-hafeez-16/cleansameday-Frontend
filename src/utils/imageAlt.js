const DEFAULT_ALT = "Service image";

export function getImageUrl(image) {
  if (!image) return "";
  if (typeof image === "string") return image;
  return image.url || image.src || "";
}

export function getEmbeddedImageAlt(image) {
  if (!image || typeof image === "string") return null;
  const alt = image.alt;
  return typeof alt === "string" && alt.trim() ? alt.trim() : null;
}

export function normalizeImageItem(image) {
  const url = getImageUrl(image);
  if (!url) return null;
  return { url, embeddedAlt: getEmbeddedImageAlt(image) };
}

export function normalizeImageList(imgUrl) {
  return (imgUrl || []).map(normalizeImageItem).filter(Boolean);
}

export function resolveImageAlt(
  { url, embeddedAlt },
  fallbackAlt = DEFAULT_ALT,
  mediaAltMap = {}
) {
  return embeddedAlt || mediaAltMap[url] || fallbackAlt || DEFAULT_ALT;
}

export function normalizeBannerImage(bannerImage) {
  if (!bannerImage) return null;
  return normalizeImageItem(bannerImage);
}
