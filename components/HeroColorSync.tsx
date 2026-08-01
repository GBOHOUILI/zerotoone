"use client";

import { useEffect } from "react";
import { useThemeColor } from "@/lib/theme-color-context";
import { extractDominantColor } from "@/lib/extract-dominant-color";

export default function HeroColorSync({ src }: { src?: string | null }) {
  const { setHeroColor } = useThemeColor();

  useEffect(() => {
    let cancelled = false;

    if (src) {
      extractDominantColor(src).then((color) => {
        if (!cancelled) setHeroColor(color);
      });
    } else {
      setHeroColor(null);
    }

    return () => {
      cancelled = true;
      setHeroColor(null); // reset dès qu'on quitte la page
    };
  }, [src, setHeroColor]);

  return null;
}