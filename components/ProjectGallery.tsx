"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import WorkPlaceholder from "@/components/WorkPlaceholder";

type GalleryImage = string | null;

export default function ProjectGallery({
  images,
  title,
  seedBase,
}: {
  images: GalleryImage[];
  title: string;
  seedBase: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const [active, setActive] = useState(0);

  function scrollToIndex(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.min(Math.max(i, 0), images.length - 1);
    const slide = track.children[clamped] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const children = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let closestDist = Infinity;
    // On compare les positions dans le référentiel du track lui-même
    // (offsetLeft du child MOINS offsetLeft du track = position relative fiable)
    const trackLeft = track.getBoundingClientRect().left;
    children.forEach((child, i) => {
      const childLeft = child.getBoundingClientRect().left - trackLeft + track.scrollLeft;
      const dist = Math.abs(childLeft - track.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.clientX;
    startScroll.current = track.scrollLeft;
    track.style.scrollSnapType = "none"; // on désactive le snap le temps du drag
    track.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = e.clientX - startX.current;
    if (Math.abs(delta) > 3) didDrag.current = true;
    track.scrollLeft = startScroll.current - delta;
  }

  function handlePointerUp() {
    const track = trackRef.current;
    isDragging.current = false;
    if (track) {
      track.style.scrollSnapType = ""; // on réactive le snap → il recale sur la slide la plus proche
    }
  }

  return (
    <div>
      <div className="flex items-end justify-between">
        <p className="eyebrow text-forest">Galerie</p>
        <span className="text-sm tabular-nums text-graphite">
          {String(active + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <p className="mt-2 text-sm text-graphite">Faites glisser pour tout voir.</p>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative mt-6 flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto pb-2 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-[4/3] w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-ink/10 sm:w-[55%] lg:w-[40%]"
          >
            {img ? (
              <Image
                src={img}
                alt={`${title} – capture ${i + 1}`}
                width={800}
                height={600}
                draggable={false}
                className="h-full w-full select-none object-cover"
              />
            ) : (
              <WorkPlaceholder seed={seedBase + i * 5 + 1} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollToIndex(active - 1)}
          disabled={active === 0}
          aria-label="Image précédente"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-forest disabled:cursor-not-allowed disabled:opacity-30"
        >
          ←
        </button>

        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Aller à l'image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-forest" : "w-1.5 bg-ink/15"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(active + 1)}
          disabled={active === images.length - 1}
          aria-label="Image suivante"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-forest disabled:cursor-not-allowed disabled:opacity-30"
        >
          →
        </button>
      </div>
    </div>
  );
}