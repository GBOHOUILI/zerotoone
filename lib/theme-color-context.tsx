// lib/theme-color-context.tsx
"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type RGB = { r: number; g: number; b: number };

export const DEFAULT_LOGO_COLOR: RGB = { r: 15, g: 61, b: 46 };

type ThemeColorContextValue = {
  color: RGB;
  setHeroColor: (color: RGB | null) => void;
};

const ThemeColorContext = createContext<ThemeColorContextValue | null>(null);

export function ThemeColorProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState<RGB>(DEFAULT_LOGO_COLOR);

  const setHeroColor = useCallback((next: RGB | null) => {
    setColor(next ?? DEFAULT_LOGO_COLOR);
  }, []);

  return (
    <ThemeColorContext.Provider value={{ color, setHeroColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

export function useThemeColor() {
  const ctx = useContext(ThemeColorContext);
  if (!ctx) {
    throw new Error("useThemeColor must be used within ThemeColorProvider");
  }
  return ctx;
}

export function darken(color: RGB, amount = 0.55): RGB {
  return {
    r: Math.round(color.r * (1 - amount)),
    g: Math.round(color.g * (1 - amount)),
    b: Math.round(color.b * (1 - amount)),
  };
}