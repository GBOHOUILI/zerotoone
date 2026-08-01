import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GlassPanel from "@/components/GlassPanel";
import MagneticButton from "@/components/MagneticButton";
import { GlyphCompass, GlyphNode, GlyphSprout } from "@/components/Glyphs";
import HeroColorSync from "@/components/HeroColorSync";
import {
  contactInfo,
  flagshipServices,
  proofPoints,
  serviceCatalog,
  whyUs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Ce que Zero To One livre, ce que ça coûte, et pourquoi. SaaS, agents IA, digitalisation de PME béninoises et community management, avec des tarifs clairs en FCFA et en euros.",
  alternates: {
    canonical: "/services",
  },
};

const flagshipIcons = [GlyphSprout, GlyphNode, GlyphCompass];

export default function ServicesPage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <HeroColorSync src="/images/service_hero_bg_1.png" />
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
            backgroundImage: "url('/images/service_hero_bg_1.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10" />

        <div className="relative mx-auto max-w-5xl">
          <GlassPanel className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-pearl/60">Nos services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-balance text-3xl font-light leading-[1.12] sm:mt-6 sm:text-4xl md:text-5xl md:leading-[1.08]">
                Ce que nous livrons,{" "}
                <span className="font-semibold">ce que ça coûte, et pourquoi.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 leading-relaxed text-pearl/70 sm:mt-8">
                Vous n&apos;avez pas besoin de comprendre le code. Vous avez
                besoin de résultats rapides, au juste prix. Chaque semaine passée sans le bon outil coûte du temps,
                des clients et des opportunités. Plus vous attendez, plus ce coût augmente.
              </p>
            </Reveal>
          </GlassPanel>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* THREE... FOUR FLAGSHIP OFFERS                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Les plus demandées</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Nos solutions phares : ce qu&apos;elles vous apportent,
              concrètement.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6 sm:mt-16 sm:gap-8">
            {flagshipServices.map((offer, i) => {
              const Icon = flagshipIcons[i % flagshipIcons.length];
              return (
                <Reveal key={offer.id} delay={i * 0.08}>
                  <div
                    className={`overflow-hidden rounded-2xl border bg-white sm:rounded-3xl ${
                      offer.badge
                        ? "border-forest/30 ring-1 ring-forest/15"
                        : "border-ink/10"
                    }`}
                  >
                    <div className="grid gap-8 p-6 sm:gap-10 sm:p-8 md:grid-cols-[1fr_1.3fr] md:p-12">
                      <div>
                        {offer.badge && (
                          <span className="eyebrow mb-4 inline-block rounded-full bg-forest px-4 py-1.5 text-pearl">
                            ★ {offer.badge}
                          </span>
                        )}
                        <Icon className="h-8 w-8 text-forest sm:h-10 sm:w-10" />
                        <h3 className="mt-4 text-xl font-medium text-ink sm:mt-5 sm:text-2xl md:text-3xl">
                          {offer.title}
                        </h3>
                        <p className="mt-3 leading-relaxed text-graphite">
                          {offer.tagline}
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:mt-8 sm:gap-4">
                          <div className="rounded-xl bg-pearl/60 p-4 sm:rounded-2xl">
                            <p className="eyebrow text-graphite">Bénin</p>
                            <p className="mt-1.5 text-sm font-medium text-ink">
                              {offer.priceBenin}
                            </p>
                          </div>
                          <div className="rounded-xl bg-pearl/60 p-4 sm:rounded-2xl">
                            <p className="eyebrow text-graphite">International</p>
                            <p className="mt-1.5 text-sm font-medium text-ink">
                              {offer.priceIntl}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="eyebrow text-forest">Ce que vous obtenez</p>
                        <ul className="mt-4 space-y-3">
                          {offer.reasons.map((reason) => (
                            <li
                              key={reason}
                              className="flex gap-3 leading-relaxed text-graphite"
                            >
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                              {reason}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 rounded-xl border border-forest/20 bg-forest/5 p-4 sm:rounded-2xl sm:p-5">
                          <p className="eyebrow text-forest">Exemple concret</p>
                          <p className="mt-2 leading-relaxed text-ink">
                            {offer.example}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PROOF — "Ce n'est pas notre premier projet"                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ink px-5 py-16 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-green">Ce n&apos;est pas notre premier projet</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
              Avant de vous parler de ce que nous pouvons construire, voici ce
              que nous avons déjà construit.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:mt-14 sm:grid-cols-2 sm:rounded-3xl">
            {proofPoints.map((point, i) => (
              <Reveal key={point.id} delay={i * 0.06}>
                <div className="h-full bg-ink p-6 sm:p-8">
                  <h3 className="text-base font-medium sm:text-lg">{point.title}</h3>
                  <p className="mt-3 leading-relaxed text-pearl/55">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FULL CATALOG — nothing hidden                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-paper px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-forest">Sans rien vous cacher</p>
            <h2 className="mt-4 max-w-2xl text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl">
              Le reste de notre offre.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-graphite">
              Ces services complètent nos solutions phares. Chacun est
              disponible seul ou combiné à un projet plus large.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-ink/10 bg-white sm:mt-12 sm:rounded-3xl">
              <div className="hidden grid-cols-[1fr_auto_1.4fr] gap-6 border-b border-ink/10 px-6 py-4 sm:px-8 md:grid">
                <span className="eyebrow text-graphite">Service</span>
                <span className="eyebrow text-graphite">Prix (Bénin)</span>
                <span className="eyebrow text-graphite">Ce que ça vous apporte</span>
              </div>
              <ul>
                {serviceCatalog.map((row, i) => (
                  <li
                    key={row.id}
                    className={`grid grid-cols-1 gap-2 px-6 py-4 sm:px-8 sm:py-5 md:grid-cols-[1fr_auto_1.4fr] md:items-center md:gap-6 ${
                      i !== serviceCatalog.length - 1 ? "border-b border-ink/5" : ""
                    }`}
                  >
                    <span className="font-medium text-ink">{row.name}</span>
                    <span className="text-sm text-forest md:text-right">
                      {row.price}
                    </span>
                    <span className="text-sm text-graphite">{row.benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* WHY ZERO TO ONE                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ink px-5 py-16 text-pearl sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-green">Pourquoi Zero To One ?</p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-3">
            {whyUs.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="h-full">
                  <h3 className="text-base font-medium sm:text-lg">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-pearl/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA — "Passons à l'action"                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-forest-radial px-5 py-20 text-center text-pearl sm:px-6 sm:py-24 md:px-10 md:py-28">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow text-pearl/60">Passons à l&apos;action</p>

          <h2 className="mt-5 text-balance text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            Un échange de 30 minutes pour comprendre votre projet,
            définir la meilleure approche et{" "}
            <span className="font-semibold">construire une solution adaptée.</span>
          </h2>

          <p className="mt-5 leading-relaxed text-pearl/65 sm:mt-6">
            Vous avez une idée, un besoin ou un projet à améliorer ?
            Parlons-en simplement. Nous analysons votre situation, identifions les
            opportunités et vous proposons une direction claire pour avancer avec
            confiance.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10">
            <MagneticButton href="/contact">
              Démarrer mon projet
            </MagneticButton>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-pearl/55">
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-pearl"
              >
                {contactInfo.email}
              </a>

              {contactInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-pearl"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
