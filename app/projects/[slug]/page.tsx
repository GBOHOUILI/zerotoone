import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import GlassPanel from "@/components/GlassPanel";
import MagneticButton from "@/components/MagneticButton";
import { pastWork } from "@/lib/content";
import ProjectGallery from "@/components/ProjectGallery";
import HeroColorSync from "@/components/HeroColorSync";
import Breadcrumbs from "@/components/seo/breadcrumbs";
import JsonLd from "@/components/seo/json-ld";
import { buildOpenSourceToolJsonLd } from "@/lib/seo-entities";

export function generateStaticParams() {
  return pastWork.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = pastWork.find((w) => w.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} — ${item.category}`,
    description: item.description,
    alternates: {
      canonical: `/projects/${item.slug}`,
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = pastWork.findIndex((w) => w.slug === slug);
  const item = pastWork[index];
  if (!item) notFound();

  const others = pastWork.filter((w) => w.slug !== item.slug).slice(0, 3);

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      {item.id === "zero-to-one-ai" && <JsonLd data={buildOpenSourceToolJsonLd(item)} />}
      <HeroColorSync src={item.image} />

      <section className="relative overflow-hidden bg-forest-radial px-6 pb-24 pt-40 text-pearl md:px-10 md:pt-48">
        {item.image && (
          <>
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            <div className="absolute inset-0 bg-ink/60" />
          </>
        )}

        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Réalisations", href: "/projects" },
                { label: item.title },
              ]}
            />
          </Reveal>

          <GlassPanel className="mt-8 max-w-3xl">
            <Reveal delay={0.06}>
              <p className="eyebrow text-pearl/60">{item.category}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="mt-5 text-balance text-4xl font-light leading-[1.08] md:text-5xl">
                {item.title}
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-6 leading-relaxed text-pearl/70">
                {item.description}
              </p>
            </Reveal>
          </GlassPanel>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* DETAILS                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-paper px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="eyebrow text-forest">Le projet</p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                {item.details}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-forest">En bref</p>
              <ul className="mt-4 space-y-3">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-3 leading-relaxed text-graphite">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* GALLERY                                                            */}
      {/* ------------------------------------------------------------------ */}
      {item.gallery && item.gallery.length > 0 && (
        <section className="bg-paper px-6 pb-24 md:px-10 md:pb-28">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <ProjectGallery
                images={item.gallery}
                title={item.title}
                seedBase={index * 11}
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* MORE WORK                                                          */}
      {/* ------------------------------------------------------------------ */}
      {others.length > 0 && (
        <section className="bg-ink px-6 py-24 text-pearl md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow text-green">À voir aussi</p>
              <h2 className="mt-4 text-3xl font-light leading-tight md:text-4xl">
                D&apos;autres réalisations.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {others.map((other, i) => (
                <Reveal key={other.slug} delay={i * 0.06}>
                  <Link
                    href={`/projects/${other.slug}`}
                    className="group block rounded-2xl border border-white/10 p-6 transition-colors hover:bg-white/5"
                  >
                    <p className="eyebrow text-pearl/40">{other.category}</p>
                    <h3 className="mt-2 font-medium">{other.title}</h3>
                    <span className="mt-3 inline-block text-sm text-pearl/50 transition-transform duration-300 group-hover:translate-x-1">
                      Voir →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* CTA                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-ink px-6 py-28 text-center text-pearl md:px-10">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-balance text-4xl font-light leading-tight md:text-5xl">
            Un projet similaire en tête ?{" "}
            <span className="font-semibold">Parlons-en.</span>
          </h2>
          <div className="mt-10 flex justify-center">
            <MagneticButton href="/contact">Démarrer un projet</MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}