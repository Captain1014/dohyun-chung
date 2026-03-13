"use client";

export function HeroBackground() {
  return (
    <>
      {/* Subtle film-grain noise */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay select-none"
        aria-hidden
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
      {/* Soft gradient blob */}
      <span
        className="pointer-events-none absolute right-0 top-0 h-[80%] w-[60%] max-w-2xl rounded-full bg-[var(--accent)] blur-[120px] select-none"
        aria-hidden
        style={{ opacity: 0.08 }}
      />
    </>
  );
}
