function isSameOriginUrl(imageUrl) {
  try {
    return (
      new URL(imageUrl, window.location.href).origin === window.location.origin
    );
  } catch {
    return false;
  }
}

/**
 * Returns text theme for overlay copy on an image region.
 * - "light" → use light/white text (background is dark)
 * - "dark"  → use dark text (background is light)
 */
export function detectImageTextTheme(imageUrl) {
  return new Promise((resolve) => {
    if (!imageUrl) {
      resolve("light");
      return;
    }

    const img = new Image();
    if (!isSameOriginUrl(imageUrl)) {
      img.crossOrigin = "anonymous";
    }

    const finish = (theme) => resolve(theme);

    img.onerror = () => finish("light");

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
          finish("light");
          return;
        }

        const sampleWidth = Math.min(img.naturalWidth, 140);
        const sampleHeight = Math.min(Math.floor(img.naturalHeight * 0.5), 140);
        canvas.width = sampleWidth;
        canvas.height = sampleHeight;

        ctx.drawImage(
          img,
          0,
          0,
          img.naturalWidth,
          img.naturalHeight * 0.5,
          0,
          0,
          sampleWidth,
          sampleHeight
        );

        const { data } = ctx.getImageData(0, 0, sampleWidth, sampleHeight);
        let sum = 0;
        let count = 0;

        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 3] < 125) continue;
          sum +=
            0.2126 * data[i] +
            0.7152 * data[i + 1] +
            0.0722 * data[i + 2];
          count += 1;
        }

        const average = count ? sum / count : 128;
        finish(average > 150 ? "dark" : "light");
      } catch {
        finish("light");
      }
    };

    img.src = imageUrl;
  });
}
