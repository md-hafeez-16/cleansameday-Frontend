import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_APP_BASE_URL || "https://cleansameday.com:4000/api";

// In-memory cache so SeoHead + SeoBody on the same page don't double-fetch.
// Failed requests are NOT cached so a retry can succeed.
const cache = new Map();

function fetchSeo(url) {
  if (cache.has(url)) return cache.get(url);

  const promise = axios
    .get(`${API_BASE}/seo/get`, { params: { url } })
    .then((res) => res.data?.data ?? null)
    .catch(() => null);

  cache.set(url, promise);
  return promise;
}

/**
 * @param {string} url
 * @returns {{ seo: object|null, loaded: boolean }}
 */
export function useSeoState(url) {
  const [seo, setSeo] = useState(null);
  const [loaded, setLoaded] = useState(!url);

  useEffect(() => {
    let active = true;

    if (!url) {
      setSeo(null);
      setLoaded(true);
      return undefined;
    }

    setLoaded(false);

    fetchSeo(url).then((data) => {
      if (!active) return;
      setSeo(data);
      setLoaded(true);
      // Allow retry after a failed fetch (don't keep null in cache forever).
      if (data == null) cache.delete(url);
    });

    return () => {
      active = false;
    };
  }, [url]);

  return { seo, loaded };
}

/**
 * @param {string} url
 * @returns {object|null}
 */
export function useSeo(url) {
  const { seo } = useSeoState(url);
  return seo;
}

export default useSeo;
