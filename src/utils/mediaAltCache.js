import axios from "axios";

const cache = new Map();
const pending = new Map();

export function getApiBase() {
  return (
    import.meta.env.VITE_APP_BASE_URL || "https://cleansameday.com:4000/api"
  );
}

export function getCachedMediaAlt(url) {
  if (!url || !cache.has(url)) return null;
  return cache.get(url);
}

export async function fetchMediaAlt(url, apiBase = getApiBase()) {
  if (!url) return null;

  if (cache.has(url)) {
    return cache.get(url);
  }

  if (pending.has(url)) {
    return pending.get(url);
  }

  const request = axios
    .get(`${apiBase}/media/getByUrl`, { params: { url } })
    .then((res) => {
      const alt = res.data?.data?.alt?.trim() || null;
      cache.set(url, alt);
      pending.delete(url);
      return alt;
    })
    .catch(() => {
      cache.set(url, null);
      pending.delete(url);
      return null;
    });

  pending.set(url, request);
  return request;
}

export async function prefetchMediaAlts(urls, apiBase = getApiBase()) {
  const uniqueUrls = [...new Set(urls.filter(Boolean))];
  await Promise.all(uniqueUrls.map((url) => fetchMediaAlt(url, apiBase)));
}
