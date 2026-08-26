// Canonical facts about Zero To One as an entity, and about its two
// co-founders — used to build Schema.org JSON-LD (Organization, WebSite,
// Person) consistently across the site. Keeping this in one place is what
// lets search engines and LLM answer engines connect "Zero To One" with
// its founders and its real product/service vocabulary, instead of
// treating every page as an unrelated fact.
//
// Personal-branding SEO priority terms (used in metadata + structured
// data, never stuffed where they don't fit the visible copy):
//   - "Zero To One" — the venture studio
//   - "Merveil Eldo-Moréo GBOHOUILI" / "Merveil GBOHOUILI" — co-founder & CEO
//   - "Oladikpo Géreau Auréole TOGNIBO" / "Géreau TOGNIBO" — co-founder & COO
//   - Vocation: venture studio technologique, SaaS, agents IA & automatisation,
//     transformation numérique — the real stack this studio ships, as
//     described in `services` and `flagshipServices` in `lib/content.ts`.

import { contactInfo, flagshipServices, sectors } from "@/lib/content";

export const siteUrl = "https://zerotoone.bj";

export const founders = [
  {
    name: "Merveil Eldo-Moréo GBOHOUILI",
    shortName: "Merveil GBOHOUILI",
    jobTitle: "Co-fondateur & CEO",
    description:
      "Co-fondateur et CEO de Zero To One, venture studio technologique. Définit la vision stratégique du studio, pilote le développement des produits et la création de nouvelles filiales technologiques.",
  },
  {
    name: "Oladikpo Géreau Auréole TOGNIBO",
    shortName: "Géreau TOGNIBO",
    jobTitle: "Co-fondateur & COO",
    description:
      "Co-fondateur et COO de Zero To One, venture studio technologique. Supervise les opérations quotidiennes, la gestion des projets et l'exécution des solutions numériques du studio.",
  },
] as const;

/** Organization JSON-LD — describes Zero To One itself as an entity. */
export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Zero To One",
    alternateName: "Zero To One Studio",
    slogan: "De l'idée à l'impact",
    url: siteUrl,
    description:
      "Venture studio technologique qui conçoit, développe et fait grandir des produits numériques à fort impact en Afrique et ailleurs : SaaS, applications web, agents IA et transformation numérique.",
    areaServed: ["Afrique francophone", "International"],
    knowsAbout: sectors,
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.locality,
      addressCountry: "BJ",
    },
    // Real, priced offers from /services — pricing itself isn't encoded
    // here as structured numeric `Offer.price` because the two currency
    // ranges (FCFA / EUR) are authored as free-form strings in
    // `lib/content.ts`; parsing them reliably would be brittle and risk
    // silently drifting out of sync with the visible page copy.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Zero To One",
      itemListElement: flagshipServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.tagline,
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: contactInfo.email,
        telephone: contactInfo.phones[0],
      },
    ],
    founder: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: f.jobTitle,
    })),
    sameAs: ["https://www.linkedin.com/company/zerotoonebuild/"],
  };
}

/** WebSite JSON-LD — helps search & LLM engines identify the canonical site. */
export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Zero To One",
    url: siteUrl,
    inLanguage: "fr",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

/**
 * SoftwareApplication JSON-LD built from a `pastWork` entry (used for the
 * "zero-to-one-ai" open-source tool project page). No repository/package
 * URL is included: none is published anywhere on the site, and a URL that
 * can't be verified shouldn't be asserted in structured data.
 */
export function buildOpenSourceToolJsonLd(tool: {
  title: string;
  description: string;
  details: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.title,
    description: tool.details || tool.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Node.js",
    isAccessibleForFree: true,
    creator: { "@id": `${siteUrl}/#organization` },
  };
}

/**
 * Person JSON-LD for a founder. Used on the About page, right next to the
 * visible team bios, so the markup matches what's actually on the page.
 */
 export function buildPersonJsonLd(person: {
   name: string;
   jobTitle: string;
   description: string;
 }) {
   return {
     "@context": "https://schema.org",
     "@type": "Person",
     name: person.name,
     jobTitle: person.jobTitle,
     description: person.description,
     worksFor: { "@id": `${siteUrl}/#organization` },
   };
 }

/**
 * SoftwareApplication JSON-LD for a real Zero To One product (e.g. "Zero To
 * One Resto"). Only used on the products page, next to the matching
 * visible description — no invented pricing or ratings are added since
 * none exist on the page.
 */
export function buildSoftwareApplicationJsonLd(product: {
  name: string;
  tagline: string;
  description: string;
  features: readonly string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: `${product.tagline} ${product.description}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    featureList: product.features.join(", "),
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function buildJobPostingJsonLd(job: {
  title: string;
  location: string;
  type: string;
  summary?: string;
  filiale?: string;
  datePosted: string;
}) {
  const employmentTypeMap: Record<string, string> = {
    CDI: "FULL_TIME",
    CDD: "TEMPORARY",
    Freelance: "CONTRACTOR",
    Stage: "INTERN",
  };

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.summary ?? job.title,
    datePosted: job.datePosted,
    employmentType: employmentTypeMap[job.type] ?? "OTHER",
    hiringOrganization: {
      "@type": "Organization",
      name: job.filiale ?? "Zero To One",
      sameAs: siteUrl,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "BJ",
      },
    },
  };
}


export function buildEncounterJsonLd(encounter: {
  name: string;
  role: string;
  caption: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: encounter.name,
    jobTitle: encounter.role,
    description: encounter.caption,
  };
}

/** Organization JSON-LD — pour chaque partenaire, relié à Zero To One via
    `subjectOf` pointant vers la page /about où le partenariat est décrit. */
export function buildPartnerJsonLd(partner: { name: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: partner.name,
    url: partner.url,
    subjectOf: { "@id": `${siteUrl}/#organization` },
  };
}

/** Offer/Service JSON-LD — pour chaque service du catalogue (services et
    flagshipServices), rattaché à l'Organization comme provider. */
export function buildServiceJsonLd(service: {
  id: string;
  title: string;
  summary: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services#service-${service.id}`,
    name: service.title,
    description: service.summary,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: ["Afrique francophone", "International"],
  };
}

export function buildProjectJsonLd(item: {
  title: string;
  category: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/projects/${item.slug}`,
    name: item.title,
    about: item.category,
    description: item.description,
    creator: { "@id": `${siteUrl}/#organization` },
  };
}
