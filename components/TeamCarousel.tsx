"use client";

import { useEffect, useRef, useState } from "react";

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  bio?: string;
};

export default function TeamCarousel({ members }: { members: TeamMember[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setIndex((i + members.length) % members.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % members.length), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [members.length]);

  const pause = () => timerRef.current && clearInterval(timerRef.current);

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={() => {
        timerRef.current = setInterval(() => setIndex((i) => (i + 1) % members.length), 5000);
      }}
    >
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
        <div
          className="flex transition-transform duration-600 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {members.map((member, i) => (
            <div key={`${member.name}-${i}`} className="w-full shrink-0 px-1">
              <div className="grid gap-6 rounded-2xl bg-ink/5 p-6 sm:gap-8 sm:rounded-3xl sm:p-8 md:grid-cols-[220px_1fr] md:items-center md:p-12">
                <div
                  className="mx-auto aspect-square w-full max-w-[160px] rounded-2xl bg-cover bg-center sm:max-w-[200px] md:mx-0 md:max-w-[220px]"
                  style={{ backgroundImage: `url('${member.photo}')` }}
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-light text-ink sm:text-2xl">{member.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-forest sm:text-sm">
                    {member.role}
                  </p>
                  {member.bio && (
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-graphite sm:text-base md:mx-0">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contrôles */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-8 sm:gap-6">
        <button
          type="button"
          aria-label="Précédent"
          onClick={prev}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink/5 sm:h-10 sm:w-10"
        >
          ‹
        </button>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {members.map((member, i) => (
            <button
              key={`${member.name}-dot-${i}`}
              type="button"
              aria-label={`Aller à ${member.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-forest" : "w-2 bg-ink/20"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Suivant"
          onClick={next}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:bg-ink/5 sm:h-10 sm:w-10"
        >
          ›
        </button>
      </div>
    </div>
  );
}