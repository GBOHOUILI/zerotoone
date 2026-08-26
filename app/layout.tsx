import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalBooking from "@/components/CalBooking";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ThemeColorProvider } from "@/lib/theme-color-context";
import JsonLd from "@/components/seo/json-ld";
import { buildOrganizationJsonLd, buildWebSiteJsonLd, siteUrl } from "@/lib/seo-entities";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zero To One — De l'idée à l'impact",
    template: "%s · Zero To One",
  },
  description:
    "Zero To One est un venture studio technologique fondé par Merveil Eldo-Moréo GBOHOUILI et Géreau TOGNIBO, qui ambitionne de devenir un acteur incontournable de l'innovation numérique en Afrique francophone, puis à l'international.",
  keywords: [
    "Zero To One",
    "venture studio",
    "venture studio Afrique",
    "venture studio Bénin",
    "Cotonou",
    "innovation numérique Afrique francophone",
    "SaaS Afrique",
    "développement web",
    "agents IA",
    "automatisation IA",
    "zero-to-one-ai",
    "agence digitale",
    "Merveil Eldo-Moréo GBOHOUILI",
    "Merveil GBOHOUILI",
    "Oladikpo Géreau Auréole TOGNIBO",
    "Géreau TOGNIBO",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zero To One — De l'idée à l'impact",
    description:
      "Un venture studio technologique qui transforme des idées en produits numériques durables.",
    url: siteUrl,
    siteName: "Zero To One",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero To One — De l'idée à l'impact",
    description:
      "Un venture studio technologique qui transforme des idées en produits numériques durables.",
  },
  // No `icons` entry: there's no favicon asset in `public/` yet. Drop an
  // `app/icon.png` (or `public/favicon.ico`) in when the brand icon is
  // ready — Next.js will wire it up automatically, no metadata needed.
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <JsonLd data={buildOrganizationJsonLd()} />
        <JsonLd data={buildWebSiteJsonLd()} />
        <ThemeColorProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeColorProvider>
        <CalBooking />
      </body>
    </html>
  );
}
