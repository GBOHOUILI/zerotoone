import Link from "next/link";
import JsonLd from "@/components/seo/json-ld";
import { siteUrl } from "@/lib/seo-entities";

export type BreadcrumbItem = {
  label: string;
  /** Omit on the last (current) item — it isn't a link. */
  href?: string;
};

/**
 * Renders a visible breadcrumb trail and its matching BreadcrumbList
 * JSON-LD. Structured data always mirrors the visible items 1:1 — Google's
 * guidelines treat markup that doesn't match on-page content as spam.
 */
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const withHome: BreadcrumbItem[] = [{ label: "Accueil", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Fil d'Ariane" className="text-sm">
        <ol className="flex flex-wrap items-center gap-2">
          {withHome.map((item, i) => (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="opacity-40">/</span>}
              {item.href ? (
                <Link href={item.href} className="opacity-60 transition-opacity hover:opacity-100">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="opacity-90">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
