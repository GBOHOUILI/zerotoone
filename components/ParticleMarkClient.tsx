"use client";

import dynamic from "next/dynamic";

// The Three.js canvas can't be server-rendered, so it's loaded client-only.
// This wrapper exists so `page.tsx` (a Server Component) can still use it.
const ParticleMark = dynamic(() => import("@/components/ParticleMark"), {
  ssr: false,
});

export default ParticleMark;
