import { useEffect, useState } from "react";
import { detectImageTextTheme } from "../utils/imageLuminance";

export default function useImageTextTheme(imageUrl) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let cancelled = false;

    detectImageTextTheme(imageUrl).then((nextTheme) => {
      if (!cancelled) setTheme(nextTheme);
    });

    return () => {
      cancelled = true;
    };
  }, [imageUrl]);

  return theme;
}
