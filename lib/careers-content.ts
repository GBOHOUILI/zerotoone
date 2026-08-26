// Contenu de la page /carrieres.

export type Department = {
  id: string;
  label: string;
};

export const departments: Department[] = [
  { id: "dev", label: "Développement" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing & Communication" },
  { id: "produit", label: "Produit" },
  { id: "business", label: "Business & Croissance" },
];

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "CDI" | "CDD" | "Freelance" | "Stage";
  filiale?: string;
  summary?: string;
  datePosted: string;
};

export const jobs: Job[] = [
  // {
  //   id: "dev-fullstack",
  //   title: "Développeur·se Full-Stack Web",
  //   department: "dev",
  //   location: "Cotonou · Hybride",
  //   type: "CDI",
  //   summary: "Construire et maintenir les plateformes SaaS du studio.",
  // datePosted: "2026-08-26",
  // },
  // {
  //   id: "dev-mobile",
  //   title: "Développeur·se Mobile (Flutter)",
  //   department: "dev",
  //   location: "Cotonou · Remote possible",
  //   type: "CDI",
  //   filiale: "Zero To One Resto",
  //   summary: "L'application mobile de commande et de gestion pour les restaurants.",
  // datePosted: "2026-08-26",
  // },
  // {
  //   id: "design-uiux",
  //   title: "UI/UX Designer",
  //   department: "design",
  //   location: "Cotonou · Hybride",
  //   type: "CDI",
  //   summary: "Concevoir des interfaces simples pour des produits utilisés au quotidien.",
  // datePosted: "2026-08-26",
  // },
  // {
  //   id: "marketing-cm",
  //   title: "Community Manager",
  //   department: "marketing",
  //   location: "Cotonou · Sur site",
  //   type: "CDI",
  //   summary: "Porter la voix de Zero To One et de ses filiales sur les réseaux.",
  // datePosted: "2026-08-26",
  // },
  // {
  //   id: "marketing-growth",
  //   title: "Chargé·e de marketing digital",
  //   department: "marketing",
  //   location: "Remote",
  //   type: "Freelance",
  //   filiale: "Mon Compagnon",
  //   summary: "Faire connaître Mon Compagnon auprès des familles concernées.",
  // datePosted: "2026-08-26",
  // },
  // {
  //   id: "produit-pm",
  //   title: "Product Manager — SaaS",
  //   department: "produit",
  //   location: "Cotonou · Hybride",
  //   type: "CDI",
  //   filiale: "Zero To One Resto",
  //   summary: "Prioriser et piloter la roadmap produit avec l'équipe technique.",
  // },
  // {
  //   id: "business-dev",
  //   title: "Business Developer",
  //   department: "business",
  //   location: "Cotonou · Sur site",
  //   type: "CDI",
  //   summary: "Développer le portefeuille clients de l'activité de services.",
  // },
  // {
  //   id: "business-support",
  //   title: "Chargé·e de support client",
  //   department: "business",
  //   location: "Remote",
  //   type: "CDI",
  //   filiale: "Mon Compagnon",
  //   summary: "Accompagner les familles et les aidants au quotidien.",
  // },
];

export const recruitmentSteps = [
  {
    number: "01",
    title: "Candidature",
    description:
      "Vous nous écrivez avec votre CV et un mot sur ce qui vous intéresse dans le poste.",
  },
  {
    number: "02",
    title: "Échange",
    description:
      "Un premier appel pour comprendre votre parcours et répondre à vos questions.",
  },
  {
    number: "03",
    title: "Mise en situation",
    description:
      "Un cas pratique proche de la réalité du poste, jamais un test générique.",
  },
  {
    number: "04",
    title: "Décision",
    description:
      "Un retour rapide, dans un sens comme dans l'autre, avec des explications claires.",
  },
];

// Adresse utilisée pour les candidatures. Remplacez par une adresse dédiée
// (ex. carrieres@zerotoone.africa) si vous en créez une.
export const careersEmail = "contact@zerotoone.bj";

export function jobMailto(job: Job) {
  const subject = encodeURIComponent(`Candidature - ${job.title}`);
  return `mailto:${careersEmail}?subject=${subject}`;
}
