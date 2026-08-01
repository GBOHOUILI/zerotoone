import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contactInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlez-nous de votre projet. Zero To One accompagne entrepreneurs, entreprises et institutions dans leur transformation numérique.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    
    <section className="bg-paper px-6 pb-28 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow text-forest">Contact</p>
            <h1 className="mt-6 text-balance text-4xl font-light leading-[1.1] text-ink md:text-5xl">
              Parlons de <span className="font-semibold">votre projet.</span>
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-graphite">
              Une idée de produit, un besoin de transformation numérique, un
              projet de site ou d&apos;application : décrivez-nous votre
              contexte, nous revenons vers vous rapidement.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-12 space-y-6">
            <div>
              <p className="text-sm font-medium text-graphite">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-lg text-ink transition-colors hover:text-forest"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-graphite">Téléphone</p>
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="block text-lg text-ink transition-colors hover:text-forest"
                >
                  {phone}
                </a>
              ))}
            </div>
            <div>
              <p className="text-sm font-medium text-graphite">Basé à</p>
              <p className="text-lg text-ink">
                {contactInfo.locality}, {contactInfo.country}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
