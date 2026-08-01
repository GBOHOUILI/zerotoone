"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-forest-radial px-6 text-center text-pearl">
      <p className="eyebrow text-pearl/50">Une erreur est survenue</p>
      <h1 className="mt-6 max-w-lg text-balance text-3xl font-light leading-tight md:text-4xl">
        Quelque chose s&apos;est mal passé de notre côté.
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-pearl px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="rounded-full border border-pearl/30 px-7 py-3.5 text-sm font-medium transition-colors hover:border-pearl/70"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
