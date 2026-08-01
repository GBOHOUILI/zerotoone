import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#0B3D2E", // Dark Green Primary
        green: "#0F5C45", // Green Secondary
        ink: "#0A0A0A", // Black
        graphite: "#6B6B6B", // Dark Gray
        pearl: "#EAEAEA", // Light / Background
        paper: "#FBFBFA",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.32em",
      },
      backgroundImage: {
        "forest-radial":
          "radial-gradient(120% 120% at 50% 0%, #0F5C45 0%, #0B3D2E 45%, #061F17 100%)",
        "seed-line":
          "linear-gradient(180deg, transparent 0%, #0F5C45 50%, transparent 100%)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-18px) translateX(8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
