import { ReactNode } from "react";

/**
 * Premium liquid glass panel.
 * Allows background animations (particles, gradients) to remain visible.
 */
export default function GlassPanel({
  children,
  className = "",
  dark = true,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`
        liquid-glass
        ${dark ? "liquid-glass-dark" : ""}
        relative
        overflow-hidden
        rounded-[1.5rem]
        px-6
        py-8
        sm:rounded-[1.75rem]
        sm:px-8
        sm:py-10
        md:rounded-[2rem]
        md:px-12
        md:py-14
        ${className}
      `}
    >
      {/* Reflet lumineux façon verre Apple */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[1.5rem]
          bg-gradient-to-br
          from-white/[0.12]
          via-transparent
          to-transparent
          sm:rounded-[1.75rem]
          md:rounded-[2rem]
        "
      />

      {/* Contenu au-dessus du reflet */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}