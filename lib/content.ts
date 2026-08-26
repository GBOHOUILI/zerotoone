// Centralized copy for the Zero To One site.
// Kept in one place so tone and facts stay consistent across pages.

export const brand = {
  name: "Zero To One",
  sloganFr: "De l'idée à l'impact",
  sloganEn: "Building What Matters",
};

export const services = [
  {
    id: "saas",
    title: "Développement de produits SaaS",
    summary:
      "Des plateformes cloud modernes pour gérer une activité au quotidien, sur abonnement, sans friction.",
    points: ["Intuitif", "Évolutif", "Sécurisé", "Multi-appareils", "Standards internationaux"],
  },
  {
    id: "web",
    title: "Applications web sur mesure",
    summary:
      "Des outils pensés pour un besoin métier précis, du premier wireframe à la mise en production.",
    points: ["Plateformes métier", "Espaces clients", "Réservation", "Tableaux de bord", "Outils de gestion"],
  },
  {
    id: "sites",
    title: "Création de sites internet",
    summary:
      "Des sites rapides, bien référencés et pensés pour convertir, quel que soit le secteur.",
    points: ["Vitrine", "Institutionnel", "E-commerce", "Événementiel", "Corporate"],
  },
  {
    id: "design",
    title: "Design UI/UX",
    summary:
      "Des interfaces modernes et centrées sur l'utilisateur, pour des expériences agréables et efficaces.",
    points: ["Recherche utilisateur", "Wireframes", "Design system", "Prototypage", "Tests"],
  },
  {
    id: "accompagnement",
    title: "Accompagnement digital",
    summary:
      "Un partenaire stratégique pour cadrer, prioriser et exécuter la transformation numérique.",
    points: ["Stratégie digitale", "Conception produit", "Prototypage", "Transformation numérique"],
  },
  {
    id: "ia",
    title: "Agents IA & automatisation",
    summary:
      "Des agents qui orchestrent vos outils (WhatsApp, CRM, bases de données) et automatisent de vraies tâches métier — pas de simples chatbots.",
    points: ["Agents conversationnels", "Automatisation métier", "Intégrations multi-outils", "Maintenance continue"],
  },
];

// The four flagship, most-requested offers — pulled from "Nos Services".
export const flagshipServices = [
  {
    id: "saas-flagship",
    badge: "Service vedette",
    title: "Création de SaaS",
    tagline: "Votre logiciel en ligne sur-mesure, prêt à générer du revenu récurrent.",
    priceBenin: "3 000 000 – 25 000 000 FCFA",
    priceIntl: "5 000 – 40 000 €",
    reasons: [
      "Un back-end multi-tenant déjà conçu, sécurisé et testé, réutilisable d'un projet à l'autre. Vous investissez directement dans votre produit, pas dans des développements déjà réalisés.",
      "Une seule équipe prend en charge l'architecture, les paiements (Mobile Money, Stripe…), les tableaux de bord et la sécurité. Vous avancez plus vite, avec un interlocuteur unique.",
      "Un MVP fonctionnel en 6 à 10 semaines pour tester votre marché rapidement et commencer à générer vos premiers revenus.",
    ],
    example:
      "Un outil de gestion scolaire en ligne pour un réseau d'écoles (inscriptions, notes, paiement des frais).",
  },
  {
    id: "smm-cm",
    badge: null as string | null,
    title: "Community Management & Réseaux sociaux",
    tagline: "Une présence en ligne cohérente, qui parle vraiment à vos clients.",
    priceBenin: "150 000 – 1 000 000 FCFA / mois",
    priceIntl: "300 – 1 800 € / mois",
    reasons: [
      "Un calendrier de contenu pensé pour votre activité et votre audience réelle, pas des publications génériques copiées d'un autre secteur.",
      "Une seule équipe gère la création, la publication et les échanges avec votre communauté. Vous gagnez du temps tout en offrant une présence professionnelle à vos clients.",
      "Un rapport mensuel clair qui vous montre les résultats obtenus et les actions à mettre en place pour continuer à faire grandir votre visibilité.",
    ],
    example:
      "Une boutique dont les ventes générées par Instagram ont doublé en trois mois grâce à un contenu régulier et des réponses rapides aux messages clients.",
  },
  {
    id: "digitalisation-pme",
    badge: null as string | null,
    title: "Digitalisation de PME",
    tagline: "Passez du papier au numérique en une seule fois, pas outil par outil.",
    priceBenin: "1 500 000 – 15 000 000 FCFA",
    priceIntl: "3 000 – 22 000 €",
    reasons: [
      "Un seul projet, un seul prix, plusieurs process informatisés d'un coup : facturation, stock, ventes, communication.",
      "Formation incluse pour que votre équipe soit autonome dès la mise en service, sans dépendre de nous au quotidien.",
      "Une mise en place progressive avec des résultats visibles rapidement, afin que votre investissement produise de la valeur sans attendre.",
    ],
    example:
      "Une boutique qui passe du carnet papier à un système complet de gestion de stock et de facturation numérique.",
  },
  {
    id: "agent-ia",
    badge: null as string | null,
    title: "Agent IA",
    tagline: "Un assistant qui travaille vraiment pour vous, pas un chatbot de plus.",
    priceBenin: "500 000 – 8 000 000 FCFA",
    priceIntl: "1 000 – 15 000 €",
    reasons: [
      "Nous concevons un véritable agent IA connecté à vos outils (WhatsApp, CRM, base de données...) pour automatiser des tâches répétitives et libérer du temps à vos équipes.",
      "Une IA performante, une architecture robuste et des tests complets avant le déploiement. Vous bénéficiez d'un outil fiable, prêt à produire des résultats dès sa mise en service.",
      "Nous assurons le suivi, les mises à jour et les optimisations pour que votre agent continue à évoluer avec votre activité et reste performant dans le temps.",
    ],
    example:
      "Un agent WhatsApp qui répond 24/7 aux clients d'une boutique en ligne et prend leurs commandes automatiquement.",
  },
];

// "Ce n'est pas notre premier projet" — concrete proof points.
export const proofPoints = [
  {
    id: "infra",
    title: "Infrastructure en production",
    description:
      "Back-end multi-tenant sécurisé, déjà testé et déployé : la base technique de nos projets SaaS.",
  },
  {
    id: "traction",
    title: "Traction organique",
    description:
      "+400 téléchargements de notre outil open-source zero-to-one-ai, sans aucune campagne marketing.",
  },
  {
    id: "feteeasy",
    title: "Plateforme en production",
    description:
      "FêteEasy, notre plateforme événementielle, conçue et déployée de bout en bout par notre équipe.",
  },
  {
    id: "hebergement",
    title: "Infrastructure de confiance",
    description:
      "Partenariat hébergement stratégique avec PlanetHoster pour une fiabilité de niveau professionnel.",
  },
];

// The rest of the offer — every additional service, undisguised pricing.
export const serviceCatalog = [
  {
    id: "03",
    name: "Intégration CRM / ERP",
    price: "1M – 12M FCFA",
    benefit: "Centralisez vos outils et gagnez en efficacité opérationnelle",
  },
  {
    id: "04",
    name: "Site web / application",
    price: "150k – 15M FCFA",
    benefit: "Une présence digitale qui attire, rassure et transforme vos visiteurs en clients",
  },
  {
    id: "06",
    name: "Pilotage de solutions numériques",
    price: "300k – 2M / mois",
    benefit: "Un accompagnement stratégique pour faire évoluer vos outils sans recruter",
  },
  {
    id: "07",
    name: "Automatisation des processus",
    price: "300k – 5M FCFA",
    benefit: "Réduisez les tâches manuelles et concentrez-vous sur ce qui crée de la valeur",
  },
  {
    id: "08",
    name: "DevOps",
    price: "500k – 4M FCFA",
    benefit: "Une infrastructure fiable, sécurisée et prête à accompagner votre croissance",
  },
  {
    id: "09",
    name: "Prévision grâce à la data",
    price: "500k – 6M FCFA",
    benefit: "Anticipez les tendances et prenez de meilleures décisions grâce aux données",
  },
  {
    id: "10",
    name: "Analyse de données",
    price: "200k – 3M FCFA",
    benefit: "Transformez vos données en décisions concrètes pour votre activité",
  },
  {
    id: "11",
    name: "Scraping / Collecte de données",
    price: "100k – 2M FCFA",
    benefit: "Collectez automatiquement les informations utiles à votre stratégie",
  },
  {
    id: "12",
    name: "Maquette UI / UX",
    price: "100k – 1M FCFA",
    benefit: "Testez votre idée et offrez une expérience pensée pour vos utilisateurs",
  },
  {
    id: "13",
    name: "Communication digitale",
    price: "100k – 600k / mois",
    benefit: "Développez votre visibilité et restez présent auprès de vos clients",
  },
  {
    id: "14",
    name: "Maintenance et support (TMA)",
    price: "50k – 500k / mois",
    benefit: "Gardez vos outils performants, sécurisés et toujours disponibles",
  },
  {
    id: "15",
    name: "Audit technique et performance",
    price: "150k – 1,5M FCFA",
    benefit: "Identifiez les blocages et les opportunités d'amélioration de vos outils",
  },
  {
    id: "16",
    name: "Optimisation digitale",
    price: "100k – 1M FCFA",
    benefit: "Améliorez vitesse, référencement et conversion pour de meilleurs résultats",
  },
  {
    id: "17",
    name: "Formations",
    price: "50k – 500k / session",
    benefit: "Rendez vos équipes autonomes et plus efficaces avec vos outils",
  },
  {
    id: "18",
    name: "Étude et devis projet",
    price: "Gratuit – 50k FCFA",
    benefit: "Obtenez une vision claire de votre projet et de son budget en 30 minutes",
  },
];

// "Pourquoi Zero To One ?" — head-to-head comparison points.
export const whyUs = [
  {
    id: "freelance",
    title: "Plus qu'un freelance, une équipe engagée",
    description:
      "Un freelance peut être limité par sa disponibilité. Avec nous, vous bénéficiez d'une équipe structurée avec des compétences techniques et opérationnelles complémentaires. Votre projet avance avec un suivi continu, une organisation claire et une vraie capacité d'adaptation.",
  },
  {
    id: "agence",
    title: "L'expertise d'une agence, sans les coûts excessifs",
    description:
      "Nous apportons des standards professionnels tout en restant proches des réalités des PME béninoises : budgets maîtrisés, solutions adaptées et compréhension du terrain. Vous obtenez une technologie performante, pensée pour votre marché, sans payer des coûts disproportionnés.",
  },
  {
    id: "jeunes",
    title: "Notre âge n'est pas une limite, nos résultats parlent",
    description:
      "La confiance ne se demande pas, elle se prouve. Nos réalisations, nos plateformes déployées et nos solutions en production témoignent de notre capacité à transformer des idées en produits fiables et utiles. Avec nous, vous choisissez une équipe ambitieuse qui construit avec vous sur le long terme.",
  },
];

// Realized work for other structures / individuals — shown at the bottom
// of the Réalisations page. Add a screenshot at `image` (e.g. a file
// dropped into /public/work/) once available; until then, an abstract
// placeholder mockup is shown instead — see components/WorkCard.tsx.
// Each item links to /projects/[slug] for a full detail page.
// `filterCategory` drives the filter pills on the Réalisations page —
// keep it to one of: "SaaS", "Sites web", "Agents IA", "Digitalisation".
// `category` stays as the precise label shown on the card itself.
export const pastWork = [
  {
    id: "even-travel",
    slug: "even-travel",
    title: "Even Travel – Circuit & Immersion",
    category: "Site Web de Voyage & Tourisme",
    filterCategory: "site web",
    description:
      "Une plateforme web conçue pour mettre en valeur les expériences de voyage proposées par Even Travel, inspirer les voyageurs, faciliter les réservations et offrir une expérience immersive autour de destinations uniques et authentiques.",
    details:
      "Développé pour Even Travel, ce site présente les circuits, les séjours et les expériences touristiques de l'agence à travers une interface élégante et immersive. Il permet aux visiteurs de découvrir les différentes offres, de consulter les détails des destinations, de réserver facilement leur prochain voyage et de contacter l'équipe pour un accompagnement personnalisé. Pensé pour offrir une navigation fluide sur tous les appareils, le site associe design premium, storytelling visuel et performance afin de renforcer la crédibilité de la marque, d'améliorer son acquisition de clients et de transformer les visiteurs en voyageurs.",
    highlights: [
      "Présentation immersive des destinations, circuits et expériences de voyage.",
      "Réservation simplifiée avec demandes de devis et prise de contact rapide.",
      "Site responsive, optimisé pour les performances, le référencement (SEO) et une expérience utilisateur premium.",
    ],
    image: "/images/projects/even_travel/1.png",
    gallery: ["/images/projects/even_travel/1.png", "/images/projects/even_travel/2.png", "/images/projects/even_travel/3.png", "/images/projects/even_travel/4.png", "/images/projects/even_travel/5.png", "/images/projects/even_travel/6.png", "/images/projects/even_travel/7.png", "/images/projects/even_travel/8.png", "/images/projects/even_travel/9.png", "/images/projects/even_travel/10.png", "/images/projects/even_travel/11.png", "/images/projects/even_travel/12.png", "/images/projects/even_travel/13.png", "/images/projects/even_travel/14.png", "/images/projects/even_travel/15.png", "/images/projects/even_travel/16.png"] as (string | null)[],
  },

  {
    id: "mon-compagnon",
    slug: "mon-compagnon",
    title: "Mon Compagnon",
    category: "Plateforme de Services",
    filterCategory: "SaaS de suivi des personnes âgées",
    description:
      "Une plateforme numérique conçue pour rapprocher les familles de leurs proches âgés en les mettant en relation avec des aidants de confiance. Mon Compagnon facilite le suivi, la communication et l'accompagnement à domicile pour offrir plus de sérénité aux familles, où qu'elles se trouvent.",
    details:
      "Développée pour répondre aux besoins des familles ayant des proches âgés, Mon Compagnon propose une solution complète de mise en relation avec des aidants qualifiés et vérifiés. La plateforme permet de réserver des services d'accompagnement à domicile, de suivre les interventions en temps réel grâce à des comptes-rendus, des photos et des notifications, tout en restant connecté avec ses proches via des appels vidéo. Conçue pour être moderne, intuitive et entièrement responsive, elle garantit une expérience sécurisée pour les familles, les aidants et les bénéficiaires, tout en contribuant à améliorer la qualité de vie des personnes âgées.",
    highlights: [
      "Mise en relation avec des aidants qualifiés et vérifiés pour un accompagnement à domicile en toute confiance.",
      "Suivi des interventions grâce aux comptes-rendus, photos, notifications, appels vidéo et rappels de médicaments.",
      "Plateforme responsive avec réservation en ligne, paiements sécurisés et espace dédié aux familles comme aux aidants.",
    ],
    image: "/images/projects/mon_compagnon/1.png",
    gallery: ["/images/projects/mon_compagnon/2.png","/images/projects/mon_compagnon/7.png","/images/projects/mon_compagnon/9.png","/images/projects/mon_compagnon/10.png","/images/projects/mon_compagnon/11.png","/images/projects/mon_compagnon/12.png","/images/projects/mon_compagnon/13.png","/images/projects/mon_compagnon/14.png","/images/projects/mon_compagnon/15.png","/images/projects/mon_compagnon/16.png","/images/projects/mon_compagnon/17.png","/images/projects/mon_compagnon/18.png","/images/projects/mon_compagnon/20.png","/images/projects/mon_compagnon/21.png","/images/projects/mon_compagnon/22.png","/images/projects/mon_compagnon/23.png","/images/projects/mon_compagnon/24.png","/images/projects/mon_compagnon/25.png","/images/projects/mon_compagnon/28.png","/images/projects/mon_compagnon/29.png"] as (string | null)[],
  },

  {
    id: "pgec",
    slug: "pgec",
    title: "Promotion du Genre, de l'Environnement et de la Citoyenneté (PGEC)",
    category: "Site Web Institutionnel",
    filterCategory: "site web",
    description:
      "Un site web institutionnel conçu pour valoriser les actions de la PGEC, renforcer sa visibilité, promouvoir ses initiatives en faveur du genre, de l'environnement et de la citoyenneté, et faciliter les échanges avec ses partenaires et les communautés.",
    details:
      "Développé pour la Promotion du Genre, de l'Environnement et de la Citoyenneté (PGEC), ce site met en lumière les missions, les projets, les campagnes de sensibilisation et les activités de l'association. Il constitue un véritable espace d'information et de communication, permettant aux visiteurs de découvrir les engagements de la PGEC, de suivre son actualité, de consulter ses publications et de prendre contact avec l'organisation. Pensé pour être moderne, accessible et responsive, il renforce la présence numérique de l'association et contribue à accroître son impact auprès des citoyens, des partenaires et des institutions.",
    highlights: [
      "Présentation des missions, des projets et des activités de la PGEC.",
      "Actualités, campagnes de sensibilisation et publications régulièrement mises en avant.",
      "Site responsive avec formulaire de contact et informations destinées aux partenaires et aux communautés.",
    ],
    image: "/images/projects/pgec/accueil.png",
    gallery: ["/images/projects/pgec/mission.png", "/images/projects/pgec/1.png", "/images/projects/pgec/2.png", "/images/projects/pgec/3.png", "/images/projects/pgec/4.png"] as (string | null)[],
  },

  {
    id: "feteeasy",
    slug: "feteeasy",
    title: "FêteEasy",
    category: "Plateforme événementielle",
    filterCategory: "SaaS",
    description:
      "Conçue et déployée de bout en bout par notre équipe : de la réservation à la gestion des événements, une plateforme SaaS complète en production.",
    details:
      "FêteEasy est notre plateforme événementielle, pensée pour simplifier l'organisation d'événements de bout en bout : découverte de prestataires, réservation, suivi et gestion du jour J. Le projet a été conçu, développé et déployé intégralement par notre équipe, de l'architecture back-end à l'interface finale, et tourne aujourd'hui en production.",
    highlights: [
      "Réservation et gestion d'événements de bout en bout",
      "Architecture SaaS multi-tenant réutilisable",
      "Déployé et opéré en production par notre équipe",
    ],
    image: "/images/projects/feteasy/1.png",
    gallery: ["/images/projects/feteasy/2.png","/images/projects/feteasy/3.png","/images/projects/feteasy/4.png","/images/projects/feteasy/5.png","/images/projects/feteasy/6.png","/images/projects/feteasy/7.png"] as (string | null)[],
  },
  {
    id: "zero-to-one-ai",
    slug: "zero-to-one-ai",
    title: "zero-to-one-ai",
    category: "Outil open-source",
    filterCategory: "Agents IA",
    description:
      "Notre outil open-source a dépassé 400 téléchargements de façon organique, sans aucune campagne marketing — adopté par la communauté.",
    details:
      "zero-to-one-ai est notre outil open-source, publié pour la communauté technique. Sans aucune campagne marketing, il a dépassé 400 téléchargements de façon purement organique — une preuve concrète de la qualité de notre travail technique, au-delà des projets menés pour nos clients.",
    highlights: [
      "+400 téléchargements organiques",
      "Aucune campagne marketing",
      "Adopté par la communauté open-source",
    ],
    image: "/images/projects/zero_to_one_ai/1.png",
    gallery: ["/images/projects/zero_to_one_ai/2.png","/images/projects/zero_to_one_ai/3.png","/images/projects/zero_to_one_ai/4.png","/images/projects/zero_to_one_ai/5.png","/images/projects/zero_to_one_ai/6.png","/images/projects/zero_to_one_ai/7.png","/images/projects/zero_to_one_ai/8.png",] as (string | null)[],
  },
  {
    id: "infra-multitenant",
    slug: "infrastructure-multitenant",
    title: "Infrastructure multi-tenant",
    category: "Infrastructure & hébergement",
    filterCategory: "SaaS",
    description:
      "Back-end multi-tenant sécurisé et testé, hébergé en partenariat avec PlanetHoster pour une fiabilité de niveau professionnel.",
    details:
      "La base technique de nos projets SaaS : un back-end multi-tenant conçu, sécurisé et testé, réutilisable d'un projet à l'autre. Il est hébergé dans le cadre d'un partenariat stratégique avec PlanetHoster, ce qui nous permet de garantir à nos clients une fiabilité de niveau professionnel dès le lancement.",
    highlights: [
      "Architecture multi-tenant réutilisable",
      "Sécurisé et testé avant chaque mise en production",
      "Partenariat d'hébergement avec PlanetHoster",
    ],
    image: "/images/projects/infrastructure multi-tenant/1.png",
    // gallery: [null, null, null] as (string | null)[],
  },
];

export const contactInfo = {
  email: "contact@zerotoone.bj",
  phones: ["+229 01 63 77 65 05", "+229 01 90 97 49 73"],
  locality: "Cotonou",
  country: "Bénin",
};

export const products = [
  {
    id: "resto",
    name: "Zero To One Resto",
    tagline: "La digitalisation des restaurants, simplement.",
    description:
      "Une plateforme SaaS qui centralise les menus numériques, les commandes, les réservations et la relation client, pour aider les restaurateurs à développer leur activité.",
    features: ["Menus numériques", "Commandes", "Réservations", "Relation client", "Outils de gestion"],
    status: "Première filiale technologique",
  },
  {
    id: "compagnon",
    name: "Mon Compagnon",
    tagline: "Rester proche de ses proches, à distance.",
    description:
      "Une plateforme qui met en relation les familles avec des accompagnants de confiance pour le suivi quotidien des personnes âgées, alliant présence humaine et suivi numérique.",
    features: ["Mise en relation", "Suivi humain", "Suivi numérique", "Familles éloignées"],
    status: "Enjeu sociétal",
  },
];

export const sectors = [
  "Startups",
  "PME",
  "Grandes entreprises",
  "ONG & Organisations internationales",
  "Institutions publiques",
  "Santé",
  "Éducation",
  "Finance",
  "Tourisme",
  "Restauration",
  "Logistique",
  "Immobilier",
];

export const philosophyPoints = [
  "La simplicité",
  "L'innovation utile",
  "La qualité",
  "La proximité avec nos clients",
  "L'amélioration continue",
];

export const model = [
  {
    id: "services",
    label: "01",
    title: "L'activité de services",
    description:
      "Elle permet d'accompagner les entreprises dans leurs projets numériques tout en générant les ressources nécessaires au développement de nos propres innovations.",
  },
  {
    id: "filiales",
    label: "02",
    title: "La création de filiales technologiques",
    description:
      "Chaque solution SaaS développée par Zero To One a vocation à devenir, à maturité, une véritable activité stratégique pouvant évoluer comme une filiale — avec sa propre identité, sa propre clientèle et son propre modèle économique.",
  },
];

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Nos services" },
  { href: "/products", label: "Nos produits" },
  { href: "/projects", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

// Team members shown in the "Notre équipe" carousel on the About page.
// Replace `photo` with real headshots dropped into /public/images/team/,
// and adjust bios to match each person's actual role and background.
export const teamMembers = [
  {
    name: "Merveil Eldo-Moréo GBOHOUILI",
    role: "Co-fondateur & CEO",
    photo: "/images/team/eldo.jpg",
    bio: "Définit la vision stratégique de Zero To One, pilote le développement du venture studio et la création de nouvelles filiales technologiques. Il supervise la stratégie de croissance, les partenariats et les orientations à long terme du groupe.",
  },
  {
    name: "Oladikpo Géreau Auréole TOGNIBO",
    role: "Co-fondateur & COO",
    photo: "/images/team/gereau.png",
    bio: "Supervise les opérations quotidiennes, la gestion des projets et l'exécution des solutions numériques. Il coordonne les équipes, veille à la qualité des livrables et transforme la vision de Zero To One en produits concrets et performants.",
  },
];

// "Nos rencontres" — real people who believed in Zero To One early on:
// clients, partners, mentors. Each entry needs a real photo dropped into
// /public/images/encounters/, the person's real name and title, and a
// short caption on what connects you (how you met, what they trusted you
// with, what came of it). Replace every placeholder below with real data —
// this section only works if it's specific and true.
export const encounters = [
    {
    id: "1",
    name: "Sylvain Ifêdé Djagbo",
    role: "Directeur Général | Job Booster Bénin",
    photo: "/images/encounters/sylvain.jpeg",
    caption:
      "Séduit par notre vision, il nous accompagne en ouvrant les portes de Job Booster Bénin. Son soutien nous permet de grandir au sein de son écosystème, en étant un département, tout en bénéficiant de sa notoriété et de son réseau.",
  },
  {
    id: "2",
    name: "Réal KITIEU",
    role: "Director of Capacity Business - East, West & Central Africa | China Mobile International Limited",
    photo: "/images/encounters/real_kitieu.png",
    caption:
      "Rencontré au WAPF, il a immédiatement cru en notre projet et nous a ouvert son réseau en nous introduisant auprès de décideurs clés. Son soutien et ses mises en relation stratégiques continuent de propulser notre développement.",
  },
  {
    id: "3",
    name: "Mina SHENOUDA",
    role: "Group CSO @ Barizco Group (PlanetHoster & Cie) | Canada",
    photo: "/images/encounters/mina.jpg",
    caption:
      "Rencontré au WAPF, il nous accorde sa confiance en nous accompagnant sur la partie infrastructure et hébergement. Grâce à son appui via PlanetHoster, nous bénéficions d'un socle technique solide et performant pour nos solutions.",
  },
  {
    id: "4",
    name: "Moïse Tchando KÉRÉKOU",
    role: "Diplomate | Ambassadeur du Bénin en Turquie",
    photo: "/images/encounters/moise.jpg",
    caption:
      "Rencontré à la SAEB, il a pris le temps d'écouter notre vision et de nous soutenir en tant que jeunes entrepreneurs. Une belle dynamique de collaboration est engagée autour de plusieurs de ses projets d'envergure.",
  },
  {
    id: "5",
    name: "Hervé HOUNZANDJI",
    role: "IT Infrastructure Manager | Systems Linux Engineer | DevOPS | ICANN Fellow",
    photo: "/images/encounters/herve.jpg",
    caption:
      "Rencontré au WAPF, il agit comme un véritable mentor en nous accompagnant au quotidien sur notre vision et nos choix stratégiques. Ses conseils avisés constituent un pilier majeur dans la structuration de notre entreprise.",
  },
  {
    id: "6",
    name: "Robert AOUAD",
    role: "Directeur Général d'Isocel Telecom",
    photo: "/images/encounters/robert.png",
    caption:
      "Présenté par Réal Kitieu lors du WAPF, il nous a accordé sa confiance malgré un emploi du temps extrêmement chargé. Son désir sincère d'apporter son aide et de soutenir notre initiative est un formidable accélérateur.",
  },
];

// "Nos valeurs" — how decisions get made day to day, shown as cards.
export const values = [
  {
    title: "Construire avant de convaincre",
    description:
      "Nous préférons montrer un prototype qui fonctionne plutôt que de vendre une promesse.",
  },
  {
    title: "L'utilisateur avant la technologie",
    description:
      "La stack la plus élégante ne vaut rien si elle ne résout pas un vrai problème pour la bonne personne.",
  },
  {
    title: "Penser long terme",
    description:
      "Nous concevons des systèmes pensés pour durer, pas pour impressionner le temps d'une démo.",
  },
  {
    title: "L'excellence dans les détails",
    description:
      "Un bouton mal aligné ou un temps de chargement trop long racontent quelque chose sur nous.",
  },
  {
    title: "Apprendre en permanence",
    description:
      "Chaque projet nous apprend quelque chose que le précédent ne nous avait pas montré.",
  },
  {
    title: "Prendre le risque avec vous",
    description:
      "Nous ne facturons pas seulement notre travail, nous investissons notre temps et notre expertise dans les projets auxquels nous croyons.",
  },
];

// "Notre manière de travailler" — the process, shown as numbered steps.
export const processSteps = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Nous prenons le temps d'écouter le vrai problème, sur le terrain, avant de parler solution.",
  },
  {
    number: "02",
    title: "Imaginer",
    description:
      "Nous explorons plusieurs approches et choisissons celle qui sert le mieux l'utilisateur final.",
  },
  {
    number: "03",
    title: "Construire",
    description:
      "Nous développons par itérations courtes, avec des points de validation réguliers.",
  },
  {
    number: "04",
    title: "Tester",
    description:
      "Chaque solution est éprouvée en conditions réelles avant sa mise en production.",
  },
  {
    number: "05",
    title: "Faire grandir",
    description:
      "Nous restons aux côtés de nos clients et partenaires bien après le lancement.",
  },
];

// "Notre parcours" — timeline of milestones. `status` drives the visual
// treatment: "done" (réalisé), "progress" (en cours), "goal" (objectif).
// Replace dates and milestones with the real ones as they happen.
export const timeline = [
  { year: "2026", title: "Naissance de Zero To One", status: "done" as const },
  { year: "2026", title: "Premier client accompagné", status: "done" as const },
  { year: "2026", title: "Première solution en production", status: "done" as const },
  { title: "Premiers partenaires stratégiques", status: "progress" as const },
  { title: "Première filiale technologique lancée", status: "goal" as const },
];

// Short, punchy declaration — the "manifesto" section.
export const manifesto = {
  lines: [
    "Nous refusons de construire des produits parce qu'ils sont à la mode.",
    "Nous construisons des produits parce qu'ils résolvent un problème.",
  ],
};

// Founder quote — replace with a real, attributed quote when ready.
export const founderQuote =
  "Nous avons créé Zero To One parce que nous sommes convaincus que l'Afrique n'a pas seulement besoin de meilleurs logiciels, mais de meilleures entreprises technologiques.";

// Partners displayed in the "Nos partenaires" section on the About page.
// Add real logo files (SVG, transparent background) under /public/images/partners/.
export const partners = [
  {
    name: "Planet Hoster",
    logo: "/images/partners/logo_planet_hoster.png",
    url: "https://www.planethoster.com",
  },
    {
    name: "Job Booster",
    logo: "/images/partners/logo_job_booster.png",
    url: "https://www.planethoster.com",
  },

];
