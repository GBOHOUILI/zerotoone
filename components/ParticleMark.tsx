"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 2600;

/** Builds a point cloud sampled on the surface of a torus — our "0". */
function sampleZero(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  const R = 1.6; // ring radius
  const r = 0.62; // tube radius
  for (let i = 0; i < count; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    const x = (R + r * Math.cos(v)) * Math.cos(u);
    const y = (R + r * Math.cos(v)) * Math.sin(u) * 1.28; // slightly tall, like a numeral
    const z = r * Math.sin(v);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

/**
 * Builds a point cloud shaped like a numeral "1" — a stem plus a small
 * flag and base. Noticeably thicker than before, since the "1" is the
 * emphasized, resting state of the animation and should read as bold
 * rather than as a thin stroke.
 */
function sampleOne(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const t = Math.random();
    let x: number, y: number;
    if (t < 0.78) {
      // the vertical stem — widened so it reads as a bold stroke
      x = (Math.random() - 0.5) * 0.68;
      y = (Math.random() - 0.5) * 3.6;
    } else if (t < 0.93) {
      // The flag: it should meet the TOP of the stem and slope DOWN
      // and to the left from there (like the "/" in "1"), not the
      // other way around. Thickened to match the stem.
      const p = Math.random(); // 0 = joins the stem, 1 = the tip
      x = -0.85 * p + (Math.random() - 0.5) * 0.3;
      y = 1.78 - 0.55 * p + (Math.random() - 0.5) * 0.3;
    } else {
      // the base — thickened to match the stem
      x = (Math.random() - 0.5) * 1.3;
      y = -1.78 + (Math.random() - 0.5) * 0.3;
    }
    const z = (Math.random() - 0.5) * 0.6;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

/** Reorders a flat xyz array so points are sorted by their y coordinate. */
function sortByHeight(positions: Float32Array): Float32Array {
  const count = positions.length / 3;
  const indices = Array.from({ length: count }, (_, i) => i);
  indices.sort((a, b) => positions[a * 3 + 1] - positions[b * 3 + 1]);
  const sorted = new Float32Array(positions.length);
  indices.forEach((srcIndex, destIndex) => {
    sorted[destIndex * 3] = positions[srcIndex * 3];
    sorted[destIndex * 3 + 1] = positions[srcIndex * 3 + 1];
    sorted[destIndex * 3 + 2] = positions[srcIndex * 3 + 2];
  });
  return sorted;
}

function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

// Duty-cycle of the breathing loop, as fractions of the period (sums to 1).
// The "1" is the destination of the brand story (0 -> 1), so it still
// holds noticeably longer than the "0" — but visually (size, opacity,
// color) both shapes now render identically, since this mark sits behind
// content as a sober background element rather than a focal animation.
const PERIOD = 15; // seconds for a full loop
const HOLD_ZERO = 0.1;
const RISE = 0.14;
const HOLD_ONE = 0.52;
const FALL = 0.14;
// remaining 0.10 = a short second pause at "0" before looping

function morphTarget(t: number): number {
  const frac = (t % PERIOD) / PERIOD;
  const p1 = HOLD_ZERO;
  const p2 = p1 + RISE;
  const p3 = p2 + HOLD_ONE;
  const p4 = p3 + FALL;

  if (frac < p1) return 0;
  if (frac < p2) return easeInOutCubic((frac - p1) / RISE);
  if (frac < p3) return 1;
  if (frac < p4) return 1 - easeInOutCubic((frac - p3) / FALL);
  return 0;
}

// Constant, sober look shared by both shapes — no size/opacity/color
// emphasis on either state, since this is a background element.
const PARTICLE_SIZE = 0.026;
const PARTICLE_OPACITY = 0.85;
const PARTICLE_COLOR = "#7fd9b6";

function MorphingPoints() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  // Sorting both clouds by height means particle i in one shape and
  // particle i in the other are both roughly at the same "altitude" —
  // so during the morph each point travels a short, coherent path
  // instead of crossing the whole scene to reach an unrelated point.
  const zero = useMemo(() => sortByHeight(sampleZero(COUNT)), []);
  const one = useMemo(() => sortByHeight(sampleOne(COUNT)), []);
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  // If motion is reduced, rest directly on "1" — the destination of the
  // story — rather than freezing on the starting "0".
  const current = useMemo(
    () => new Float32Array(reducedMotion ? one : zero),
    [reducedMotion, one, zero]
  );

  // The "0" should stay centered (it reads fine there), but the "1" is a
  // narrow, off-center shape — left uncorrected it ends up hugging
  // whatever sits to its left (e.g. the hero card). Nudging the whole
  // group to the right as the morph approaches "1" keeps it clear of
  // that neighbor without any layout-side positioning tricks.
  const OFFSET_X = 1.3;

  useFrame((state) => {
    const geom = pointsRef.current?.geometry;
    if (!geom) return;
    const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;

    if (reducedMotion) {
      // Static "1", same sober treatment as the rest of the loop.
      if (pointsRef.current) {
        pointsRef.current.position.x = OFFSET_X;
      }
      return;
    }

    const t = state.clock.getElapsedTime();
    const target = morphTarget(t);

    for (let i = 0; i < COUNT * 3; i++) {
      current[i] = THREE.MathUtils.lerp(zero[i], one[i], target);
    }
    posAttr.array.set(current);
    posAttr.needsUpdate = true;

    // No per-frame size/opacity/color changes here on purpose: both
    // shapes share the same constant material values, set once below,
    // so neither state reads as more "emphasized" than the other.

    if (pointsRef.current) {
      // Bounded oscillation rather than a full spin: a torus reads fine
      // from any angle, but the "1" is a flat shape — spinning it all the
      // way around sweeps its flag through the view and reads as a messy
      // diagonal streak. Keeping the swing small keeps both forms legible.
      // The swing stays constant across the whole loop (no settling), so
      // motion feels equally calm on "0" and on "1".
      pointsRef.current.rotation.y = Math.sin(t * 0.18) * 0.5;
      pointsRef.current.rotation.x = Math.sin(t * 0.13) * 0.12;
      // Slide right as the "1" comes into view; slide back to center
      // as it recedes toward "0".
      pointsRef.current.position.x = THREE.MathUtils.lerp(0, OFFSET_X, target);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[current, 3]}
          count={COUNT}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={PARTICLE_SIZE}
        color={PARTICLE_COLOR}
        transparent
        opacity={PARTICLE_OPACITY}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/**
 * The site's signature visual: a particle field that breathes between
 * the "0" and the "1" — a literal, ambient rendering of the brand mark.
 * Both shapes render with the same size, opacity and color throughout —
 * this sits behind content as a sober background element, not a focal
 * animation, so nothing here should visually compete with the page.
 * Transparent background so it composites over the hero gradient.
 */
export default function ParticleMark({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <MorphingPoints />
      </Canvas>
    </div>
  );
}