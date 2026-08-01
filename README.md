# Zero To One — Site vitrine

Site vitrine multipage pour **Zero To One**, venture studio technologique.
Construit avec Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer
Motion et Three.js (React Three Fiber).

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

```bash
npm run build   # build de production
npm run start   # sert le build de production
```

## Structure

```
app/
  layout.tsx          # layout racine : polices, métadonnées, JSON-LD
  page.tsx             # accueil
  about/page.tsx        # à propos (vision, mission, philosophie)
  services/page.tsx     # ce que nous faisons
  products/page.tsx     # nos produits (Resto, Mon Compagnon)
  projects/page.tsx     # réalisations (carrousel + section "déjà livré")
  projects/[slug]/page.tsx # page détail d'une réalisation (liquid glass)
  contact/page.tsx      # contact
  globals.css           # styles de base, scrollbar, focus, reduced-motion

components/
  Navbar.tsx             # navigation sticky avec effet blur + menu mobile
  Footer.tsx
  ParticleMark.tsx        # pièce signature Three.js : particules 0 ↔ 1
  Reveal.tsx              # animation d'apparition au scroll (Framer Motion)
  MagneticButton.tsx      # bouton CTA avec micro-interaction magnétique
  TiltCard.tsx            # carte avec effet de bascule 3D au survol
  ContactForm.tsx         # formulaire de contact avec validation
  Glyphs.tsx              # glyphes SVG sur mesure (pas d'icônes génériques)
  SmoothScrollProvider.tsx # défilement fluide (Lenis), respecte prefers-reduced-motion

lib/
  content.ts             # copy et données du site (source unique de vérité)
```

## Palette de marque

| Rôle | Couleur | Hex |
|---|---|---|
| Dark Green Primary | `forest` | `#0B3D2E` |
| Green Secondary | `green` | `#0F5C45` |
| Black | `ink` | `#0A0A0A` |
| Dark Gray | `graphite` | `#6B6B6B` |
| Light / Background | `pearl` | `#EAEAEA` |

Police : **Montserrat** (300 à 700), chargée via `next/font/google`.

## À connecter avant mise en production

- **Formulaire de contact** : `components/ContactForm.tsx` simule l'envoi.
  Branchez une route API, un service de formulaire ou un webhook CRM à
  l'endroit indiqué par un commentaire dans le fichier.
- **Captures d'écran des réalisations** : la section "Déjà livré" de la page
  Réalisations (`app/projects/page.tsx`, données dans `pastWork` dans
  `lib/content.ts`) affiche un mockup abstrait tant qu'aucune image n'est
  fournie. Déposez vos captures dans `public/work/` (ex. `public/work/fete-easy.jpg`)
  puis renseignez le champ `image: "/work/fete-easy.jpg"` sur l'entrée
  correspondante — la vraie image remplacera automatiquement le placeholder.
- **Logo réel** : le mark actuel (`ParticleMark.tsx`) est une interprétation
  générative du "0 → 1". Remplacez-le ou complétez-le avec le fichier logo
  officiel si vous en avez un (SVG recommandé) dans `public/`.
- **Domaine & Open Graph** : mettez à jour `siteUrl` dans `app/layout.tsx`
  ainsi qu'une image `opengraph-image` dans `app/`.
- **Analytics / SEO** : ajoutez votre outil d'analytics et vérifiez la
  Search Console une fois le domaine final connu.

## Sources du contenu

- Le contenu de marque (vision, mission, philosophie, produits) vient du
  document de positionnement initial.
- Le contenu de la page Services (offres phares, tarifs, preuves,
  catalogue complet, "pourquoi nous") vient du document `ZTO_Nos_Services`.
  Toutes ces données sont centralisées dans `lib/content.ts` pour rester
  faciles à mettre à jour au même endroit.
