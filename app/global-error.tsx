"use client";

import { useEffect } from "react";

// Next.js requires `global-error.tsx` to render its own <html>/<body>: it
// replaces the root layout entirely when the root layout itself throws, so
// it can't rely on any provider/markup defined there.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with real error reporting (Sentry, etc.) when one is wired up.
    console.error(error);
  }, [error]);

  return (
    <html lang="fr">
      <body
        style={{
          display: "flex",
          minHeight: "100svh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "1.5rem",
          textAlign: "center",
          backgroundColor: "#0B3D2E",
          color: "#EAEAEA",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <p style={{ opacity: 0.6, fontSize: "0.85rem" }}>
          Une erreur est survenue
        </p>
        <h1 style={{ maxWidth: 32 + "rem", fontWeight: 300, fontSize: "1.75rem" }}>
          Quelque chose s&apos;est mal passé de notre côté.
        </h1>
        <button
          onClick={reset}
          style={{
            borderRadius: "9999px",
            backgroundColor: "#EAEAEA",
            color: "#0A0A0A",
            padding: "0.9rem 1.75rem",
            fontSize: "0.9rem",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}
