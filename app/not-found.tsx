import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center bg-forest-radial px-6 text-center text-pearl">
      <p className="eyebrow text-pearl/50">Erreur 404</p>
      <h1 className="mt-6 text-6xl font-light md:text-8xl">
        0 <span className="font-semibold">→</span> ?
      </h1>
      <p className="mt-6 max-w-md leading-relaxed text-pearl/60">
        Cette page n&apos;existe pas encore. Peut-être est-ce la prochaine
        idée à transformer en produit.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-pearl/30 px-7 py-3.5 text-sm font-medium transition-colors hover:border-pearl/70"
      >
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
