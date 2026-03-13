"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const MAX_TILT = 14;
const PERSPECTIVE = 1200;

export function Profile3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTransform({
        rotateY: x * MAX_TILT * 2,
        rotateX: -y * MAX_TILT * 2,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] cursor-default select-none"
      style={{ perspective: PERSPECTIVE }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-[var(--border)] border border-[var(--border)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-transform duration-150 ease-out"
        style={{
          aspectRatio: "3 / 4",
          transform: `perspective(${PERSPECTIVE}px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/IMG_1006.jpg"
          alt="Dohyun Chung"
          fill
          className="object-cover"
          priority
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
        {(!loaded || errored) && (
          <span className="absolute inset-0 flex items-center justify-center bg-[var(--background)]/90 text-[var(--muted)] text-sm">
            Dohyun Chung
          </span>
        )}
      </div>
    </div>
  );
}
