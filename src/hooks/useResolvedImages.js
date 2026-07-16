import { useEffect, useMemo, useState } from "react";
import { normalizeImageList, resolveImageAlt } from "../utils/imageAlt";
import { fetchMediaAlt, getApiBase } from "../utils/mediaAltCache";

export default function useResolvedImages(
  imgUrl,
  fallbackAlt = "Service image"
) {
  const items = useMemo(() => normalizeImageList(imgUrl), [imgUrl]);
  const [mediaAltMap, setMediaAltMap] = useState({});

  useEffect(() => {
    const urlsToFetch = items
      .filter((item) => !item.embeddedAlt)
      .map((item) => item.url);

    if (!urlsToFetch.length) return undefined;

    let cancelled = false;
    const apiBase = getApiBase();

    (async () => {
      const results = await Promise.all(
        urlsToFetch.map(async (url) => [url, await fetchMediaAlt(url, apiBase)])
      );

      if (cancelled) return;

      setMediaAltMap((prev) => {
        const next = { ...prev };
        results.forEach(([url, alt]) => {
          if (alt) next[url] = alt;
        });
        return next;
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [items]);

  return useMemo(
    () =>
      items.map((item) => ({
        url: item.url,
        alt: resolveImageAlt(item, fallbackAlt, mediaAltMap),
      })),
    [items, fallbackAlt, mediaAltMap]
  );
}
