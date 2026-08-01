"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.28, y: y * 0.4 });
  }

  const base =
    "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-pearl text-ink hover:bg-white"
      : "border border-pearl/30 text-pearl hover:border-pearl/70";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={`${base} ${styles}`}
    >
      {children}
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </motion.a>
  );
}
