import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import GlassPanel from "@/components/GlassPanel";
import MagneticButton from "@/components/MagneticButton";
import WorkGallery from "@/components/WorkGallery";
import HeroColorSync from "@/components/HeroColorSync";
import {
  GlyphCompass,
  GlyphLattice,
  GlyphOrbit,
  GlyphSignal,
  GlyphSprout,
} from "@/components/Glyphs";
import { pastWork } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Un aperçu des domaines d'expertise de Zero To One : SaaS, applications web, sites internet et design UI/UX.",
  alternates: {
    canonical: "/projects",
  },
};

const showcase = [
  {
    id: "resto",
    kicker: "Produit interne",
    title: "Zero To One Resto",
    detail:
      "Menus numériques, commandes et réservations réunis dans une seule plateforme pensée pour les restaurateurs.",
    icon: GlyphSprout,
  },
  {
    id: "compagnon",
    kicker: "Produit interne",
    title: "Mon Compagnon",
    detail:
      "Mise en relation des familles avec des accompagnants de confiance pour le suivi des personnes âgées.",
    icon: GlyphOrbit,
  },
  {
    id: "saas-clients",
    kicker: "Expertise",
    title: "Plateformes SaaS clients",
    detail:
      "Des outils cloud sur abonnement conçus pour des besoins métier spécifiques, du cadrage au lancement.",
    icon: GlyphLattice,
  },
  {
    id: "sites",
    kicker: "Expertise",
    title: "Sites vitrines & corporate",
    detail:
      "Des sites rapides et bien référencés, pensés pour la performance et l'expérience utilisateur.",
    icon: GlyphCompass,
  },
  {
    id: "accompagnement",
    kicker: "Expertise",
    title: "Stratégie & accompagnement digital",
    detail:
      "Du cadrage stratégique au prototypage, un partenaire présent à chaque étape de la transformation numérique.",
    icon: GlyphSignal,
  },
];

export default function ProjectsPage() {
  return (
    <>
    <HeroColorSync src="/images/realisations_hero_bg.png" />
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
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/realisations_hero_bg.png')",
          }}
        />

        <div className="mx-auto max-w-5xl">
          <GlassPanel className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-forest">Réalisations</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-light leading-[1.08] md:text-5xl">
                Ce que nous construisons,{" "}
                <span className="font-semibold">domaine par domaine.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 leading-relaxed text-pearl/70">
                Zero To One en est à ses débuts. Voici les terrains sur
                lesquels nous concentrons notre énergie, entre produits internes
                et projets menés avec nos partenaires.
              </p>
            </Reveal>
          </GlassPanel>
        </div>
      </section>



      <section className="bg-paper px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow text-forest">Déjà livré</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight text-ink md:text-5xl">
              Des projets réalisés pour d&apos;autres structures et
              particuliers.
            </h2>
          </Reveal>

          <Reveal delay={0.14} className="mt-16">
            <WorkGallery items={pastWork} />
          </Reveal>
        </div>
      </section>

            <section className="bg-paper py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-forest">Faites glisser pour explorer</p>
          </Reveal>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 [scrollbar-width:none] md:px-10 [&::-webkit-scrollbar]:hidden">
          {showcase.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.id}
                delay={i * 0.06}
                className="w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-[32%]"
              >
                <TiltCard>
                  <div className="flex h-full flex-col justify-between gap-16 rounded-3xl border border-ink/10 bg-white p-9">
                    <div className="flex items-center justify-between">
                      <Icon className="h-10 w-10 text-forest" />
                      <span className="eyebrow text-graphite">
                        {item.kicker}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-graphite">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-center text-pearl md:px-10">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-light leading-tight md:text-5xl">
            Votre projet pourrait être{" "}
            <span className="font-semibold">le prochain.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact">Démarrer un projet</MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}