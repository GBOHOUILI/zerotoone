import type { MetadataRoute } from "next";
import { pastWork } from "@/lib/content";
import { siteUrl } from "@/lib/seo-entities";

// Listed explicitly rather than derived from `nav`: `nav` only drives the
// navbar/footer links, and some real, crawlable routes (like `/carrieres`)
// are intentionally reached from in-page links instead of the main nav.
// Sitemap correctness shouldn't depend on that distinction.
const staticPages: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.7 },
  { path: "/carrieres", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const workRoutes: MetadataRoute.Sitemap = pastWork.map((item) => ({
    url: `${siteUrl}/projects/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...workRoutes];
}
