import React, { useEffect, useMemo, useState } from "react";
import {
  getEmbeddedImageAlt,
  getImageUrl,
  resolveImageAlt,
} from "../utils/imageAlt";
import { fetchMediaAlt, getApiBase } from "../utils/mediaAltCache";

const ServiceImage = ({
  image,
  fallbackAlt = "Service image",
  src: srcOverride,
  alt: altOverride,
  ...imgProps
}) => {
  const url = srcOverride || getImageUrl(image);
  const embeddedAlt = getEmbeddedImageAlt(image);
  const [mediaAlt, setMediaAlt] = useState(null);

  useEffect(() => {
    if (embeddedAlt || !url) return undefined;

    let cancelled = false;

    fetchMediaAlt(url, getApiBase()).then((alt) => {
      if (!cancelled && alt) setMediaAlt(alt);
    });

    return () => {
      cancelled = true;
    };
  }, [url, embeddedAlt]);

  const alt = useMemo(() => {
    if (altOverride) return altOverride;
    return resolveImageAlt(
      { url, embeddedAlt },
      fallbackAlt,
      mediaAlt ? { [url]: mediaAlt } : {}
    );
  }, [url, embeddedAlt, fallbackAlt, mediaAlt, altOverride]);

  if (!url) return null;

  return <img src={url} alt={alt} {...imgProps} />;
};

export default ServiceImage;
