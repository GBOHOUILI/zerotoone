import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import GlassPanel from "@/components/GlassPanel";
import MagneticButton from "@/components/MagneticButton";
import { GlyphLattice, GlyphSprout } from "@/components/Glyphs";
import { products, sectors } from "@/lib/content";
import HeroColorSync from "@/components/HeroColorSync";
import JsonLd from "@/components/seo/json-ld";
import { buildSoftwareApplicationJsonLd } from "@/lib/seo-entities";

export const metadata: Metadata = {
  title: "Nos produits",
  description:
    "Zero To One Resto et Mon Compagnon : les premières filiales technologiques nées du venture studio Zero To One.",
  alternates: {
    canonical: "/products",
  },
};

const icons = [GlyphSprout, GlyphLattice];

export default function ProductsPage() {
  return (
    <>
    {products.map((product) => (
      <JsonLd key={product.id} data={buildSoftwareApplicationJsonLd(product)} />
    ))}
    <HeroColorSync src="/images/products_hero_bg.png" />
      <section
      className="
          relative overflow-hidden
          px-5 pb-16 pt-28
          text-pearl
          sm:px-6 sm:pb-20 sm:pt-32
          md:px-10 md:pb-24 md:pt-40
          lg:pt-48
        ">

          <div
          className="absolute inset-0 scale-105 bg-contain bg-center"
          style={{
            backgroundImage: "url('/images/products_hero_bg.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/10" />
        <div className="mx-auto max-w-5xl">
          <GlassPanel className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-pearl/60">Nos premiers produits</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-light leading-[1.08] md:text-5xl">
                Des idées, devenues{" "}
                <span className="font-semibold">des filiales.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 text-balance leading-relaxed text-pearl/70">
                Chaque solution SaaS développée par Zero To One a vocation à
                devenir, à maturité, une véritable activité stratégique avec
                sa propre identité, sa propre clientèle et son propre modèle
                économique.
              </p>
            </Reveal>
          </GlassPanel>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          {products.map((product, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={product.id}>
                <div className="grid overflow-hidden rounded-3xl border border-ink/10 bg-white md:grid-cols-[1fr_1.2fr]">
                  <div className="flex flex-col justify-center gap-6 bg-forest-radial p-10 text-pearl md:p-14">
                    <Icon className="h-12 w-12 text-green" />
                    <div>
                      <p className="eyebrow text-pearl/50">{product.status}</p>
                      <h2 className="mt-3 text-3xl font-medium md:text-4xl">
                        {product.name}
                      </h2>
                      <p className="mt-2 text-pearl/60">{product.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-6 p-10 md:p-14">
                    <p className="leading-relaxed text-graphite">
                      {product.description}
                    </p>
                    <ul className="flex flex-wrap gap-3">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-forest/25 px-4 py-1.5 text-sm text-forest"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-pearl md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="eyebrow text-green">Et ensuite</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-light leading-tight md:text-5xl">
              De nouvelles filiales, secteur après secteur.
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {sectors.map((s, i) => (
              <Reveal key={s} delay={i * 0.04}>
                <span className="inline-block rounded-full border border-pearl/20 px-5 py-2 text-sm text-pearl/70">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-14">
            <MagneticButton href="/contact">
              Proposer une idée
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
