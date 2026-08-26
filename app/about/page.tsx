import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GlassPanel from "@/components/GlassPanel";
import { GlyphOrbit } from "@/components/Glyphs";
import TeamCarousel from "@/components/TeamCarousel";
import Partners from "@/components/Partners";
import Encounters from "@/components/Encounters";
import HeroColorSync from "@/components/HeroColorSync";
import JsonLd from "@/components/seo/json-ld";
import { buildPersonJsonLd, founders } from "@/lib/seo-entities";

import {
  philosophyPoints,
  teamMembers,
  partners,
  encounters,
  brand,
  values,
  processSteps,
  timeline,
  manifesto,
  founderQuote,
  services,
  products,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la vision, la mission et la philosophie de Zero To One, venture studio technologique africain fondé par Merveil Eldo-Moréo GBOHOUILI et Oladikpo Géreau Auréole TOGNIBO.",
  alternates: {
    canonical: "/about",
  },
};

const statusLabel: Record<string, string> = {
  done: "Réalisé",
  progress: "En cours",
  goal: "Objectif",
};

// Géométrie de la courbe "Notre parcours" : positions x/y de chaque jalon
// dans un viewBox fixe. x est toujours réparti régulièrement ; y monte
// en accélérant (smoothstep) pour que la courbe se lise comme une
// progression qui prend de l'ampleur, pas une simple diagonale.
const TIMELINE_W = 1000;
const TIMELINE_H = 220;
const TIMELINE_PAD_X = 48;
const TIMELINE_PAD_Y = 36;

function timelinePoints(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0 : i / (count - 1);
    const eased = t * t * (3 - 2 * t); // smoothstep : montée qui accélère
    const x = TIMELINE_PAD_X + t * (TIMELINE_W - 2 * TIMELINE_PAD_X);
    const y =
      TIMELINE_H - TIMELINE_PAD_Y - eased * (TIMELINE_H - 2 * TIMELINE_PAD_Y);
    return { x, y };
  });
}

function timelineSegments(points: { x: number; y: number }[]) {
  const segments: { d: string; toIndex: number }[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    segments.push({
      d: `M ${p1.x},${p1.y} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`,
      toIndex: i + 1,
    });
  }
  return segments;
}

export default function AboutPage() {
  return (
    <>
      {founders.map((founder) => (
        <JsonLd key={founder.name} data={buildPersonJsonLd(founder)} />
      ))}
      {/* HERO */}
      <HeroColorSync src="/images/about_hero_bg.jpg" />
      <section
        className="
          relative overflow-hidden
          px-5 pb-16 pt-28
          text-pearl
          sm:px-6 sm:pb-20 sm:pt-32
          md:px-10 md:pb-24 md:pt-40
          lg:pt-48
        "
      >
        <div
          className="absolute inset-0 scale-105 bg-contain bg-center"
          style={{
            backgroundImage: "url('/images/about_hero_bg.jpg')",
          }}
        />

        {/* Overlay neutre (ink) pour rester cohérent avec les sections sombres
            et garantir la lisibilité quelle que soit l'image */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10" />

        <div className="relative mx-auto max-w-5xl">
          <GlassPanel className="max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-pearl/60">À propos</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance text-3xl font-light leading-[1.12] sm:mt-6 sm:text-4xl md:text-5xl md:leading-[1.08]">
                Plus qu&apos;une agence digitale, un{" "}
                <span className="font-semibold">venture studio.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 text-balance leading-relaxed text-pearl/70 sm:mt-8">
                Nous concevons, développons, lançons et accompagnons des
                solutions numériques qui répondent à des problématiques
                concrètes, en Afrique et ailleurs. Notre ambition : bâtir un
                écosystème d&apos;entreprises technologiques capables de créer
                de la valeur et d&apos;améliorer le quotidien de leurs
                utilisateurs.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-pearl/50 sm:mt-8 sm:text-sm">
                {brand.sloganEn}
              </p>
            </Reveal>
          </GlassPanel>
        </div>
      </section>

      {/* VISION */}
      <section className="relative overflow-hidden bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <p className="pointer-events-none absolute -right-4 -top-6 select-none text-[8rem] font-light leading-none text-ink/[0.04] sm:-right-6 sm:-top-10 sm:text-[10rem] md:text-[14rem] lg:text-[20rem]">
          0
        </p>
        <div className="relative mx-auto grid max-w-6xl gap-10 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="eyebrow text-forest">Notre vision</p>
            <h2 className="mt-4 text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Un groupe technologique africain de référence.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 leading-relaxed text-graphite sm:space-y-5">
              <p>
                Construire un groupe technologique africain de référence,
                reconnu pour la création de produits numériques innovants et
                d&apos;entreprises technologiques à fort potentiel.
              </p>
              <p>
                À long terme, Zero To One ambitionne de développer un
                portefeuille de filiales spécialisées, chacune portée par un
                produit SaaS ou une solution numérique répondant à un besoin
                spécifique. Chaque filiale pourra évoluer de manière autonome,
                attirer ses propres partenaires stratégiques et, lorsque cela
                sera pertinent, accueillir des investisseurs afin
                d&apos;accélérer sa croissance.
              </p>
              <p className="font-medium text-ink">
                Notre objectif n&apos;est pas uniquement de développer des
                logiciels, mais de créer des entreprises technologiques
                durables.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="relative overflow-hidden bg-paper py-16 text-pearl sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-green">En quelques chiffres</p>
          </Reveal>

          <div className="mt-8 grid gap-8 sm:mt-10 md:grid-cols-2 md:items-center md:gap-10">
            {/* Chiffres à gauche */}
            <div className="order-2 grid grid-cols-2 gap-y-8 gap-x-6 text-center sm:text-left md:order-1">
              <Reveal delay={0}>
                <div>
                  <p className="text-3xl font-bold text-green md:text-4xl">
                    {services.length}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-ink/60 sm:text-sm">
                    services
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div>
                  <p className="text-3xl font-bold text-green md:text-4xl">
                    {products.length}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-ink/60 sm:text-sm">
                    produits en développement
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div>
                  <p className="text-3xl font-light text-green md:text-4xl">
                    {partners.length}+
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-ink/60 sm:text-sm">
                    partenaires
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div>
                  <p className="text-3xl font-light text-green md:text-4xl">
                    Afrique
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-wide text-ink/60 sm:text-sm">
                    comme marché principal
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Image à droite */}
            <Reveal delay={0.06} className="order-1 md:order-2">
              <div className="animate-float relative mx-auto aspect-square w-full max-w-xs select-none sm:max-w-sm md:max-w-none">
                <Image
                  src="/images/about1.png"
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(min-width: 768px) 480px, 384px"
                  className="object-contain"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden bg-ink px-5 py-16 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-32">
        <p className="pointer-events-none absolute -right-4 -top-6 select-none text-[8rem] font-light leading-none text-pearl/[0.04] sm:-right-6 sm:-top-10 sm:text-[10rem] md:text-[14rem] lg:text-[20rem]">
          1
        </p>
        <div className="relative mx-auto grid max-w-6xl gap-10 sm:gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="eyebrow text-green">Notre mission</p>
            <h2 className="mt-4 text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
              Accompagner la transformation numérique.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 leading-relaxed text-pearl/65 sm:space-y-5">
              <p>
                Accompagner les entrepreneurs, entreprises, institutions,
                associations et organisations dans leur transformation
                numérique en développant des solutions simples, performantes
                et accessibles.
              </p>
              <p>
                En parallèle, nous concevons nos propres produits afin
                d&apos;apporter des réponses concrètes aux défis rencontrés
                dans différents secteurs d&apos;activité.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 md:grid-cols-[1fr_1fr] md:items-center md:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl bg-ink/5 sm:rounded-3xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/book-zero-to-one.jpg"
                  alt="Zero to One, de Peter Thiel"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 pt-3 sm:p-5 md:p-6 md:pt-4">
                <p className="text-xs uppercase tracking-wide text-graphite/60 sm:text-sm">
                  Peter Thiel - Zero to One: Notes on Startups, or How to
                  Build the Future (2014)
                </p>
                <p className="mt-6 border-t border-ink/10 pt-5 text-xs font-medium uppercase tracking-[0.2em] text-forest sm:mt-8 sm:pt-6 sm:text-sm">
                  {brand.sloganEn}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-forest">Notre histoire</p>
            <h2 className="mt-4 text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Pourquoi « Zero to One » ?
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-graphite sm:mt-6 sm:space-y-5">
              <p>
                Ce livre a profondément changé notre façon de voir ce que
                nous étions en train de construire. Peter Thiel y explique
                que copier ce qui existe déjà, c&apos;est aller de 1 à N :
                on reproduit, on améliore, on développe l&apos;existant. En
                revanche, créer quelque chose qui n&apos;existait pas
                auparavant, c&apos;est aller de 0 à 1. C&apos;est cette idée
                qui nous a donné envie de porter ce nom.
              </p>
              <p>
                Parce qu&apos;au Bénin, comme ailleurs en Afrique, on nous a
                souvent dit qu&apos;il fallait reproduire ce qui fonctionne
                ailleurs. Nous avons choisi l&apos;inverse : partir
                d&apos;un problème réel, observé sur le terrain, et
                construire une réponse qui n&apos;existait pas encore,
                pensée pour ce contexte et pour les personnes qui y vivent.
              </p>
              <p className="font-medium text-ink">
                Zero To One n&apos;est pas seulement le titre d&apos;un
                livre sur notre étagère. C&apos;est une philosophie.
                C&apos;est la question que nous nous posons à chaque
                projet : qu&apos;est-ce qui n&apos;existe pas encore, et
                que pouvons-nous créer pour répondre à un besoin réel ?
              </p>
            </div>

            <blockquote className="mt-6 border-l-2 border-forest pl-5 italic leading-relaxed text-ink/80 sm:mt-8 sm:pl-6">
              « {founderQuote} »
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* MANIFESTE */}
      <section className="bg-ink px-5 py-20 text-pearl sm:px-6 sm:py-24 md:px-10 md:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            {manifesto.lines.map((line, i) => (
              <p
                key={line}
                className={`text-balance text-xl font-light leading-snug sm:text-2xl md:text-4xl ${
                  i === manifesto.lines.length - 1
                    ? "mt-3 font-semibold text-green sm:mt-4"
                    : "text-pearl/90"
                }`}
              >
                {line}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Nos valeurs</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Comment nous prenons nos décisions.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:mt-16 sm:grid-cols-2 sm:rounded-3xl lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-3 bg-paper p-5 sm:gap-4 sm:p-7">
                  <GlyphOrbit className="h-6 w-6 text-forest sm:h-7 sm:w-7" />
                  <p className="font-medium text-ink">{value.title}</p>
                  <p className="text-sm leading-relaxed text-graphite">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE MANIÈRE DE TRAVAILLER */}
      <section className="bg-ink px-5 py-16 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-green">Notre manière de travailler</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
              Un processus simple, du problème au produit.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 border-t border-pearl/15 pt-5 sm:gap-4 sm:pt-6">
                  <p className="text-sm font-medium text-green">{step.number}</p>
                  <p className="text-base font-medium sm:text-lg">{step.title}</p>
                  <p className="text-sm leading-relaxed text-pearl/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-ink px-5 py-16 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="eyebrow text-green">Notre parcours</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
              Où nous en sommes.
            </h2>
          </Reveal>

          {(() => {
            const points = timelinePoints(timeline.length);
            const segments = timelineSegments(points);
            return (
              <div className="mt-10 sm:mt-16">
                <Reveal delay={0.1}>
                  <svg
                    viewBox={`0 0 ${TIMELINE_W} ${TIMELINE_H}`}
                    preserveAspectRatio="none"
                    className="h-28 w-full sm:h-40 md:h-56"
                  >
                    {segments.map((seg, i) => {
                      const isGoal = timeline[seg.toIndex].status === "goal";
                      return (
                        <path
                          key={i}
                          d={seg.d}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeDasharray={isGoal ? "6 8" : undefined}
                          className="text-pearl/20"
                        />
                      );
                    })}

                    {points.map((p, i) => {
                      const status = timeline[i].status;
                      const colorClass =
                        status === "done"
                          ? "text-green"
                          : status === "progress"
                            ? "text-pearl/80"
                            : "text-pearl/30";
                      return (
                        <g key={i}>
                          {status === "done" && (
                            <circle
                              cx={p.x}
                              cy={p.y}
                              r={13}
                              className={colorClass}
                              fill="currentColor"
                              opacity={0.15}
                            />
                          )}
                          <circle
                            cx={p.x}
                            cy={p.y}
                            r={status === "goal" ? 6 : 7}
                            className={colorClass}
                            fill={status === "goal" ? "none" : "currentColor"}
                            stroke="currentColor"
                            strokeWidth={status === "goal" ? 2 : 0}
                          />
                        </g>
                      );
                    })}
                  </svg>
                </Reveal>

                {/* Légendes, alignées sous chaque jalon de la courbe */}
                <div
                  className="flex"
                  style={{
                    paddingInline: `${(TIMELINE_PAD_X / TIMELINE_W) * 100}%`,
                  }}
                >
                  {timeline.map((step, i) => (
                    <div key={step.title} className="flex-1 px-1 text-center sm:px-1.5 md:px-3">
                      <Reveal delay={0.16 + i * 0.06}>
                        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                          {step.year && (
                            <span className="text-[10px] text-pearl/50 sm:text-xs">
                              {step.year}
                            </span>
                          )}
                          <span
                            className={`text-[9px] font-medium uppercase tracking-wide sm:text-[10px] md:text-xs ${
                              step.status === "done"
                                ? "text-green"
                                : step.status === "progress"
                                  ? "text-pearl/70"
                                  : "text-pearl/40"
                            }`}
                          >
                            {statusLabel[step.status]}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[10px] font-medium leading-snug text-pearl sm:mt-2 sm:text-xs md:text-sm">
                          {step.title}
                        </p>
                      </Reveal>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* CEUX QUI ONT CRU EN NOUS */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Ceux qui ont cru en nous</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Des gens qui ont cru en nous avant les autres.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-graphite sm:mt-6">
              Zero To One n&apos;existerait pas sans les personnes qui nous
              ont fait confiance dès le départ : des clients qui ont pris le
              risque de nous engager, des partenaires qui ont ouvert une
              porte, des mentors qui ont cru au projet avant qu&apos;il ne
              fasse ses preuves.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-16">
            <Encounters items={encounters} />
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-ink px-5 py-14 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-green">Notre philosophie</p>
                <h2 className="mt-4 max-w-xl text-xl font-light leading-tight sm:text-2xl md:text-3xl">
                  La technologie doit résoudre des problèmes réels.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-pearl/10 sm:mt-10 sm:grid-cols-2 sm:rounded-3xl lg:grid-cols-5">
            {philosophyPoints.map((point, i) => (
              <Reveal key={point} delay={i * 0.05}>
                <div className="flex h-full flex-col justify-between gap-5 bg-ink p-5 sm:gap-6 sm:p-6">
                  <GlyphOrbit className="h-6 w-6 text-green" />
                  <p className="text-sm font-medium text-pearl">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Notre équipe</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Les personnes qui construisent Zero To One.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-graphite sm:mt-6">
              Une équipe pluridisciplinaire, réunie autour d&apos;une même
              conviction : la technologie a un rôle concret à jouer dans le
              développement du continent.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-16">
            <TeamCarousel members={teamMembers} />
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <section className="bg-ink px-5 py-16 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-green">Nos partenaires</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
              Ils nous font confiance.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 p-0 sm:mt-14">
              <Partners items={partners} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* REJOIGNEZ L'AVENTURE */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-forest">Rejoignez l&apos;aventure</p>
            <h2 className="mt-4 text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Envie de construire l&apos;étape suivante avec nous ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-graphite sm:mt-6">
              Que vous soyez un entrepreneur avec une idée à tester, un
              investisseur curieux du marché africain, un partenaire
              stratégique ou un futur collaborateur, il y a une place pour
              vous dans ce que nous construisons.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-2.5 text-xs text-graphite sm:mt-10 sm:grid-cols-4 sm:gap-3 sm:text-sm">
              <span className="rounded-full border border-ink/15 px-3 py-2 sm:px-4">
                Entrepreneur
              </span>
              <span className="rounded-full border border-ink/15 px-3 py-2 sm:px-4">
                Investisseur
              </span>
              <span className="rounded-full border border-ink/15 px-3 py-2 sm:px-4">
                Partenaire
              </span>
              <span className="rounded-full border border-ink/15 px-3 py-2 sm:px-4">
                Collaborateur
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="/carrieres"
                className="w-full rounded-full bg-forest px-8 py-3 text-center font-medium text-pearl transition hover:opacity-90 sm:w-auto"
              >
                Voir les postes ouverts
              </a>
              <a
                href="mailto:contact@zerotoone.bj"
                className="w-full rounded-full border border-ink/15 px-8 py-3 text-center font-medium text-ink transition hover:bg-ink/5 sm:w-auto"
              >
                Construisons ensemble
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
