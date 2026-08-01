// A small set of bespoke line-art glyphs, drawn specifically for Zero To One.
// No icon library — every mark here is custom SVG tied to the brand's
// "growth from a seed" motif (root systems, sprouting lines, orbiting rings).

export function GlyphSprout({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M24 40V20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 22C24 22 14 22 12 12C22 12 24 22 24 22Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 26C24 26 34 26 36 16C26 16 24 26 24 26Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="40" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function GlyphOrbit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <ellipse
        cx="24"
        cy="24"
        rx="18"
        ry="8"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="8"
        ry="18"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.5"
      />
      <circle cx="24" cy="24" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function GlyphLattice({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <rect
        x="8"
        y="8"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="26"
        y="8"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
      <rect
        x="8"
        y="26"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
      <rect
        x="26"
        y="26"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function GlyphCompass({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M24 10L28 24L24 38L20 24L24 10Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlyphSignal({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M8 34L18 22L26 28L40 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="40" cy="12" r="2.2" fill="currentColor" />
      <circle cx="8" cy="34" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function GlyphSeedling({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M24 6C24 6 24 20 24 42"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M24 8C16 8 12 16 12 16C12 16 20 18 24 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M24 8C32 8 36 16 36 16C36 16 28 18 24 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function GlyphNode({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="34" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="38" cy="34" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <path
        d="M24 13.4V21M20.8 26L13.2 31.4M27.2 26L34.8 31.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
