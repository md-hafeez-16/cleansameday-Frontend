import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE =
  import.meta.env.VITE_APP_BASE_URL || "https://cleansameday.com:4000/api";

// Simple in-memory cache so SeoHead + SeoBody on the same page don't double-fetch.
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
 * Reads admin-managed SEO data for an exact page URL.
 * The SEO team edits these values from the admin dashboard, so no code change
 * is needed to update on-page SEO (title, description, keywords, h1, content).
 *
 * @param {string} url - The EXACT SEO key stored in the dashboard (e.g. "/", "/about-us/").
 * @returns {object|null} The SEO object, or null while loading / when absent.
 */
export function useSeo(url) {
  const [seo, setSeo] = useState(null);

  useEffect(() => {
    let active = true;

    if (!url) {
      setSeo(null);
      return undefined;
    }

    fetchSeo(url).then((data) => {
      if (active) setSeo(data);
    });

    return () => {
      active = false;
    };
  }, [url]);

  return seo;
}

export default useSeo;
