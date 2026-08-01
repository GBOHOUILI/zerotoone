"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WorkCard from "@/components/WorkCard";

const PAGE_SIZE = 6;
const CATEGORY_ORDER = ["Tous", "SaaS", "Sites web", "Agents IA", "Digitalisation"];

type WorkItem = {
  slug: string;
  title: string;
  category: string;
  filterCategory: string;
  description: string;
  image?: string | null;
};

export default function WorkGallery({ items }: { items: WorkItem[] }) {
  const categories = useMemo(() => {
    const present = new Set(items.map((item) => item.filterCategory));
    return CATEGORY_ORDER.filter((c) => c === "Tous" || present.has(c));
  }, [items]);

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      activeCategory === "Tous"
        ? items
        : items.filter((item) => item.filterCategory === activeCategory),
    [items, activeCategory]
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  function selectCategory(category: string) {
    setActiveCategory(category);
    setPage(1);
  }

  function goTo(next: number) {
    const clamped = Math.min(Math.max(next, 1), pageCount);
    setPage(clamped);
    document
      .getElementById("realisations-gallery")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div id="realisations-gallery">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                active ? "text-pearl" : "text-graphite hover:text-ink"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-full bg-forest"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
          <motion.div
            key={item.slug}
            layout
            className="h-full"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.4,
              delay: i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <WorkCard item={item} index={start + i} />
          </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-graphite">
          Aucune réalisation dans cette catégorie pour le moment.
        </p>
      )}

      {pageCount > 1 && (
        <nav
          aria-label="Pagination des réalisations"
          className="mt-14 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-forest disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Page précédente"
          >
            ←
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goTo(n)}
              aria-current={n === page ? "page" : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                n === page
                  ? "bg-forest text-pearl"
                  : "text-graphite hover:bg-ink/5"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            type="button"
            onClick={() => goTo(page + 1)}
            disabled={page === pageCount}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-forest disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="Page suivante"
          >
            →
          </button>
        </nav>
      )}
    </div>
  );
}