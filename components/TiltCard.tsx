"use client";

import { useRef, PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  /** Max tilt angle in degrees. Lower = more subtle. */
  intensity?: number;
  /** Show the soft glare highlight that follows the cursor. */
  glare?: boolean;
  className?: string;
};

export default function TiltCard({
  children,
  intensity = 8,
  glare = true,
  className = "",
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const springConfig = { stiffness: 250, damping: 22, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity * 1.25, intensity * 1.25]), springConfig);
  const scale = useSpring(1, springConfig);

  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glareOpacity = useSpring(0, { stiffness: 250, damping: 26 });

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerEnter() {
    if (prefersReducedMotion) return;
    scale.set(1.015);
    glareOpacity.set(1);
  }

  function handlePointerLeave() {
    px.set(0.5);
    py.set(0.5);
    scale.set(1);
    glareOpacity.set(0);
  }

  if (prefersReducedMotion) {
    return <div className={`h-full ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, scale, transformPerspective: 900 }}
      className={`relative h-full [transform-style:preserve-3d] ${className}`}
    >
      {children}

      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          style={{ opacity: glareOpacity }}
        >
          <motion.div
            className="absolute h-[220%] w-[220%] rounded-full"
            style={{
              left: glareX,
              top: glareY,
              x: "-50%",
              y: "-50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 60%)",
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}