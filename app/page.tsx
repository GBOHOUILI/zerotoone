import Link from "next/link";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import GlassPanel from "@/components/GlassPanel";
import ParticleMark from "@/components/ParticleMarkClient";
import Image from "next/image";
import {
  GlyphCompass,
  GlyphLattice,
  GlyphNode,
  GlyphOrbit,
  GlyphSeedling,
  GlyphSignal,
  GlyphSprout,
} from "@/components/Glyphs";
import { model, products, sectors, services } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Keyframes used across the page that aren't in the Tailwind config.
          Kept local to the page so nothing else needs to change. */}
      <style>{`
        @keyframes floatSlow { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-22px,0); } }
        @keyframes floatSlower { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,18px,0); } }
        @keyframes shine { 0% { transform: translateX(-140%) skewX(-12deg); } 100% { transform: translateX(240%) skewX(-12deg); } }
        @keyframes softPulse { 0%, 100% { opacity: .35; transform: scale(1); } 50% { opacity: .7; transform: scale(1.08); } }
        @keyframes bounceCue { 0%, 100% { transform: translateY(0); opacity: .45; } 50% { transform: translateY(8px); opacity: 1; } }
        @keyframes reveal-underline { to { transform: scaleX(1); } }
      `}</style>

      {/* ---------------------------------------------------------------- */}
      {/* HERO                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-radial text-pearl">
        {/* Ambient depth: two soft blurred orbs drifting behind the particle
            mark, purely atmospheric, disabled on very small screens where
            they'd just add visual noise behind the text. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/4 hidden h-[26rem] w-[26rem] rounded-full bg-green/20 blur-[110px] sm:block"
          style={{ animation: "floatSlow 11s ease-in-out infinite" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 hidden h-72 w-72 rounded-full bg-forest/30 blur-[90px] sm:block"
          style={{ animation: "floatSlower 13s ease-in-out infinite" }}
        />

        <ParticleMark
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            scale-125
            opacity-70
            transition-opacity
            duration-700
            sm:scale-110 sm:opacity-90
            md:scale-90 md:opacity-100
            lg:translate-x-[8%] lg:scale-100
          "
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(0,0,0,0.55),transparent)]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-14 px-5 pb-24 pt-28 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:pb-0">
          <GlassPanel className="w-full max-w-2xl">
            <Reveal>
              <p className="eyebrow relative inline-flex items-center gap-2 text-pearl/60">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-green"
                    style={{ animation: "softPulse 2.4s ease-in-out infinite" }}
                  />
                </span>
                Venture studio technologique
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance text-4xl font-light leading-[1.08] tracking-tightest sm:text-5xl md:text-6xl">
                De l&apos;idée{" "}
                <span className="text-balance font-light">à</span>{" "}
                <span className="relative inline-block font-semibold text-pearl">
                  l&apos;impact.
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-green to-transparent"
                    style={{
                      animation: "reveal-underline 1s 1.1s cubic-bezier(0.65,0,0.35,1) forwards",
                    }}
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-pearl/70 md:text-lg">
                Nous concevons, développons et faisons grandir des produits
                numériques qui répondent à des problèmes réels, jusqu&apos;à
                ce qu&apos;ils deviennent des entreprises.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-11 flex flex-wrap items-center gap-4 sm:gap-5">
                <MagneticButton href="/products">
                  Découvrir nos solutions
                </MagneticButton>
                <MagneticButton href="/about" variant="outline">
                  Notre vision
                </MagneticButton>
              </div>
            </Reveal>
          </GlassPanel>

        </div>

        <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-pearl/40">
          <span className="hidden text-[10px] font-medium uppercase tracking-widest2 sm:block">
            Découvrir
          </span>
          <div
            className="h-9 w-px bg-gradient-to-b from-pearl/70 to-transparent"
            style={{ animation: "bounceCue 1.8s ease-in-out infinite" }}
          />
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* MANIFESTO STRIP                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="
    relative overflow-hidden
    border-b border-ink/5
    bg-paper
    px-5 py-20
    sm:px-6 sm:py-28
    md:px-10 md:py-32
    lg:py-40
  "
      >
        <div
          className="
      relative mx-auto max-w-7xl
      grid items-center gap-10
      md:grid-cols-2 md:gap-8
      lg:gap-16
    "
        >
          {/* Texte */}
          <Reveal>
            <div className="max-w-xl">
              <p
                className="
            text-balance
            text-lg font-light leading-snug text-ink
            sm:text-xl
            md:text-2xl
            lg:text-3xl
          "
              >
                Une simple idée peut devenir un produit à fort impact,{" "}
                <span className="font-semibold text-forest">
                  lorsqu&apos;elle est portée par une équipe compétente,
                  une vision claire et une exécution rigoureuse.
                </span>
              </p>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-graphite">
                De la stratégie jusqu&apos;au lancement, nous transformons
                des idées ambitieuses en produits numériques conçus pour durer.
              </p>
            </div>
          </Reveal>

          {/* Illustration — visible dès la tablette, plus grande sur desktop */}
          <Reveal delay={0.12}>
            <div className="relative mx-auto aspect-[6/5] w-full max-w-md md:max-w-none">
              <Image
                src="/images/img.png"
                alt=""
                aria-hidden="true"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="select-none object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>
      {/* ---------------------------------------------------------------- */}
      {/* WHAT WE DO — preview                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-ink px-5 py-20 text-pearl sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow text-green">Ce que nous faisons</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 max-w-lg text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                  Six façons de transformer une idée en produit.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link
                href="/services"
                className="text-sm font-medium text-pearl/70 underline decoration-green underline-offset-8 transition-colors hover:text-pearl"
              >
                Tous nos services →
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:mt-16 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s, i) => {
              const icons = [
                GlyphSprout,
                GlyphLattice,
                GlyphCompass,
                GlyphOrbit,
                GlyphSignal,
                GlyphNode,
              ];
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={s.id} delay={i * 0.06} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between gap-10 overflow-hidden bg-ink p-8 transition-colors duration-500 hover:bg-forest/40">
                    {/* Shine sweep on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:block"
                      style={{ animation: "shine 1.1s ease" }}
                    />
                    <Icon className="h-9 w-9 text-green transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
                    <div>
                      <h3 className="text-lg font-medium">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-pearl/55">
                        {s.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* MODEL — two pillars                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-paper px-5 py-20 sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow text-forest">Notre modèle</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight text-ink sm:text-4xl md:text-5xl">
              Deux piliers complémentaires.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2">
            {model.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-forest/30 hover:shadow-[0_25px_60px_-25px_rgba(0,112,60,0.35)] sm:p-10">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-forest to-green transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span className="text-sm font-semibold tracking-widest2 text-graphite">
                    {m.label}
                  </span>
                  <h3 className="text-2xl font-medium text-ink">{m.title}</h3>
                  <p className="leading-relaxed text-graphite">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* PRODUCTS — horizontal scroll teaser                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-forest-radial px-5 py-20 text-pearl sm:px-6 sm:py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow text-pearl/50">Nos premiers produits</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-4 max-w-lg text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
                  Des idées devenues des filiales.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link
                href="/products"
                className="text-sm font-medium text-pearl/70 underline decoration-pearl/40 underline-offset-8 transition-colors hover:text-pearl"
              >
                Explorer nos produits →
              </Link>
            </Reveal>
          </div>

          <div className="relative mt-12 sm:mt-16">
            <div
              className="
                flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 sm:gap-6
                [scrollbar-width:none] [-ms-overflow-style:none]
                [mask-image:linear-gradient(to_right,transparent,black_2%,black_96%,transparent)]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {products.map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={i * 0.1}
                  className="w-[86%] shrink-0 snap-start sm:w-[62%] md:w-[46%]"
                >
                  <Link
                    href="/products"
                    className="group relative block h-full overflow-hidden rounded-3xl border border-pearl/15 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-green/40 hover:bg-white/[0.08] hover:shadow-[0_30px_70px_-25px_rgba(127,217,182,0.4)] sm:p-10"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(400px circle at var(--x,50%) var(--y,0%), rgba(127,217,182,0.12), transparent 60%)",
                      }}
                    />
                    <p className="eyebrow text-pearl/60">{p.status}</p>
                    <h3 className="mt-5 text-2xl font-medium sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-pearl/60">{p.tagline}</p>
                    <p className="mt-6 leading-relaxed text-pearl/50">
                      {p.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pearl transition-transform duration-300 group-hover:translate-x-1">
                      En savoir plus →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-pearl/35 md:hidden">
              Faites glisser pour découvrir →
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* AMBITION — sectors marquee                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="overflow-hidden bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-forest">Notre ambition</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-2xl text-3xl font-light leading-tight text-ink sm:text-4xl md:text-5xl">
              Devenir un acteur incontournable de l&apos;innovation numérique
              en Afrique francophone, puis à l&apos;international.
            </h2>
          </Reveal>
        </div>

        <div
          className="relative mt-14 flex select-none sm:mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div
            className="flex shrink-0 animate-marquee gap-12 pr-12 hover:[animation-play-state:paused] sm:gap-16 sm:pr-16"
          >
            {[...sectors, ...sectors].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-3xl font-light text-ink/15 transition-colors duration-300 hover:text-ink/35 sm:text-4xl md:text-6xl"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CLOSING CTA                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-ink px-5 py-24 text-center text-pearl sm:px-6 sm:py-32 md:px-10">
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative mx-auto flex h-12 w-12 items-center justify-center">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-green/30 blur-xl"
              style={{ animation: "softPulse 2.6s ease-in-out infinite" }}
            />
            <GlyphSeedling className="relative h-12 w-12 text-green" />
          </div>
          <h2 className="mt-8 text-balance text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Chaque grande innovation commence toujours{" "}
            <span className="font-semibold">par un premier pas.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact">Démarrer un projet</MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}