"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

export type Encounter = {
    id: string;
    name: string;
    role: string;
    photo: string;
    caption: string;
};

export default function Encounters({ items }: { items: Encounter[] }) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(true);

    const updateArrows = () => {
        const el = trackRef.current;
        if (!el) return;
        setCanPrev(el.scrollLeft > 8);
        setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    };

    useEffect(() => {
        updateArrows();
        const el = trackRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateArrows, { passive: true });
        window.addEventListener("resize", updateArrows);
        return () => {
            el.removeEventListener("scroll", updateArrows);
            window.removeEventListener("resize", updateArrows);
        };
    }, [items.length]);

    const scrollByCard = (direction: 1 | -1) => {
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector<HTMLElement>("[data-card]");
        const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
        el.scrollBy({ left: step * direction, behavior: "smooth" });
    };

    return (
        <div className="relative">
            {/* Fades de bord pour suggérer qu'il y a plus de contenu */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-paper to-transparent sm:w-6 md:w-8" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-paper to-transparent sm:w-6 md:w-8" />

            <div
                ref={trackRef}
                className="
          flex gap-4 overflow-x-auto scroll-smooth pb-4
          snap-x snap-mandatory
          sm:gap-5 md:gap-6
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
            >
                {items.map((item, i) => (
                    <div
                        key={item.id}
                        data-card
                        className="w-[82%] shrink-0 snap-start xs:w-[78%] sm:w-[46%] lg:w-[30%]"
                    >
                        <Reveal delay={i * 0.05}>
                            <div className="group overflow-hidden rounded-2xl bg-ink/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10 sm:rounded-3xl">
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                                        style={{ backgroundImage: `url('${item.photo}')` }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-ink/25 backdrop-blur-md [mask-image:linear-gradient(to_top,black_60%,transparent)]" />

                                    <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                                        <p className="text-base font-medium text-pearl [text-shadow:0_1px_6px_rgba(0,0,0,0.4)] sm:text-lg">
                                            {item.name}
                                        </p>
                                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-pearl/70 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)] sm:text-sm">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-5 md:p-6">
                                    <p className="text-sm leading-relaxed text-graphite sm:text-base">
                                        {item.caption}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>

            {/* Contrôles */}
            <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6">
                <button
                    type="button"
                    aria-label="Précédent"
                    onClick={() => scrollByCard(-1)}
                    disabled={!canPrev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink/5 disabled:opacity-30 disabled:hover:bg-transparent sm:h-11 sm:w-11"
                >
                    ‹
                </button>
                <button
                    type="button"
                    aria-label="Suivant"
                    onClick={() => scrollByCard(1)}
                    disabled={!canNext}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink/5 disabled:opacity-30 disabled:hover:bg-transparent sm:h-11 sm:w-11"
                >
                    ›
                </button>
            </div>
        </div>
    );
}