import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo-entities";

// Traditional search crawlers get a blanket allow. AI answer-engine
// crawlers are listed explicitly and by name — some of them (GPTBot,
// Google-Extended) also double as *training* crawlers, so calling them
// out one by one keeps the intent readable ("we want to be citable in
// AI answers") instead of relying on the wildcard rule to cover them.
const aiCrawlers = [
  "GPTBot", // OpenAI / ChatGPT
  "OAI-SearchBot", // OpenAI search
  "ChatGPT-User",
  "ClaudeBot", // Anthropic / Claude
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini / Google AI features
  "Applebot-Extension",
  "Bytespider", // Bing/ChatGPT alternates commonly grouped with AI crawlers
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
