import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { GlyphOrbit } from "@/components/Glyphs";
import JobsBoard from "@/components/JobsBoard";
import JsonLd from "@/components/seo/json-ld";
import { buildJobPostingJsonLd } from "@/lib/seo-entities";

import { philosophyPoints } from "@/lib/content";
import { departments, jobs, recruitmentSteps, careersEmail } from "@/lib/careers-content";

export const metadata: Metadata = {
  title: "Carrières",
  description:
    "Rejoignez Zero To One, venture studio technologique africain, et construisez la prochaine filiale technologique avec nous.",
  alternates: {
    canonical: "/carrieres",
  },
};

const whyJoinUs = [
  {
    title: "Un impact mesurable",
    description:
      "Vous ne livrez pas un projet client puis passez au suivant : vous participez à la construction d'une filiale, sur la durée.",
  },
  {
    title: "Une exécution rigoureuse",
    description:
      "Nous croyons qu'une idée devient un produit à fort impact quand elle est portée par une équipe compétente et une exécution soignée.",
  },
  {
    title: "Des produits réels",
    description:
      "Zero To One Resto, Mon Compagnon : vous travaillez sur des produits déjà en usage, pas sur des maquettes qui ne sortiront jamais.",
  },
  {
    title: "Une trajectoire claire",
    description:
      "Chaque filiale grandit avec ses propres équipes. Rejoindre tôt, c'est pouvoir évoluer avec elle.",
  },
];

export default function CareersPage() {
  return (
    <>
      {jobs.map((job) => (
        <JsonLd key={job.id} data={buildJobPostingJsonLd(job)} />
      ))}
      {/* HERO */}
      <section className="bg-ink px-5 pb-16 pt-28 text-pearl sm:px-6 sm:pb-20 sm:pt-32 md:px-10 md:pb-24 md:pt-40 lg:pt-48">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="eyebrow text-green">Carrières</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-3xl font-light leading-[1.12] sm:mt-6 sm:text-4xl md:text-5xl md:leading-[1.08]">
              Construisez la prochaine{" "}
              <span className="font-semibold">filiale technologique</span>{" "}
              avec nous.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-balance leading-relaxed text-pearl/70 sm:mt-8">
              Zero To One est un venture studio qui conçoit, lance et
              développe des produits SaaS et des applications numériques à
              fort impact. Chaque poste ouvert est une chance de construire
              quelque chose qui, un jour, deviendra une entreprise à part
              entière.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex gap-8 border-t border-pearl/15 pt-6 sm:mt-12 sm:gap-12">
              <div>
                <p className="text-3xl font-bold text-green md:text-4xl">
                  {jobs.length}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-pearl/50 sm:text-sm">
                  poste{jobs.length > 1 ? "s" : ""} ouvert
                  {jobs.length > 1 ? "s" : ""}
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green md:text-4xl">
                  {departments.length}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-pearl/50 sm:text-sm">
                  départements qui recrutent
                </p>
              </div>
            </div>
            {jobs.length === 0 && (
              <p className="mt-4 text-sm text-pearl/60">
                On recrute par vagues : pas de poste ouvert à l&apos;instant,
                mais regardez les départements ci-dessous et écrivez-nous.
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* POURQUOI NOUS REJOINDRE */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Pourquoi nous rejoindre</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Un venture studio n&apos;est pas une agence.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:mt-16 sm:grid-cols-2 sm:rounded-3xl lg:grid-cols-4">
            {whyJoinUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-3 bg-paper p-5 sm:gap-4 sm:p-7">
                  <GlyphOrbit className="h-6 w-6 text-forest sm:h-7 sm:w-7" />
                  <p className="font-medium text-ink">{item.title}</p>
                  <p className="text-sm leading-relaxed text-graphite">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POSTES OUVERTS */}
      <section id="postes" className="bg-paper px-5 pb-16 sm:px-6 sm:pb-20 md:px-10 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Postes ouverts</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Trouvez votre place dans l&apos;équipe.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 sm:mt-16">
              <JobsBoard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHIE */}
      <section className="bg-ink px-5 py-14 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-green">Notre philosophie</p>
            <h2 className="mt-4 max-w-xl text-xl font-light leading-tight sm:text-2xl md:text-3xl">
              La technologie doit résoudre des problèmes réels.
            </h2>
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

      {/* PROCESSUS DE RECRUTEMENT */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Notre processus</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Simple, direct, sans étapes inutiles.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {recruitmentSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-3 border-t border-ink/15 pt-5 sm:gap-4 sm:pt-6">
                  <p className="text-sm font-medium text-forest">{step.number}</p>
                  <p className="text-base font-medium text-ink sm:text-lg">
                    {step.title}
                  </p>
                  <p className="text-sm leading-relaxed text-graphite">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CANDIDATURE SPONTANÉE */}
      <section className="bg-ink px-5 py-16 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow text-green">Candidature spontanée</p>
            <h2 className="mt-4 text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
              Vous ne trouvez pas le poste idéal ?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-pearl/70 sm:mt-6">
              Nous sommes toujours ouverts aux profils talentueux qui
              partagent notre vision, même sans offre correspondante
              aujourd&apos;hui.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex justify-center sm:mt-10">
              <a
                href={`mailto:${careersEmail}?subject=Candidature%20spontanée`}
                className="rounded-full bg-forest px-8 py-3 text-center font-medium text-pearl transition hover:opacity-90"
              >
                Envoyer une candidature spontanée
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
