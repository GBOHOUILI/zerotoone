import type { RGB } from "./theme-color-context";

export function extractDominantColor(src: string): Promise<RGB | null> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const size = 48;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return resolve(null);

        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);

        let rSum = 0,
          gSum = 0,
          bSum = 0,
          weightSum = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a < 100) continue;

          const max = Math.max(r, g, b);
          const min = Math.min(r, g, b);
          const lightness = (max + min) / 2 / 255;
          const saturation = max === min ? 0 : (max - min) / 255;

          // Ignore les pixels quasi blancs/noirs/gris
          if (lightness < 0.06 || lightness > 0.94) continue;

          // Pondère par la saturation pour privilégier les tons signifiants
          const weight = 0.15 + saturation;

          rSum += r * weight;
          gSum += g * weight;
          bSum += b * weight;
          weightSum += weight;
        }

        if (weightSum === 0) return resolve(null);

        resolve({
          r: Math.round(rSum / weightSum),
          g: Math.round(gSum / weightSum),
          b: Math.round(bSum / weightSum),
        });
      } catch {
        // Image cross-origin non lisible par le canvas (tainted)
        resolve(null);
      }
    };

    img.onerror = () => resolve(null);
    img.src = src;
  });
}