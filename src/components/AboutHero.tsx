"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  duration: number;
};

export function AboutHero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: 5 + Math.random() * 90,
        y: 10 + Math.random() * 80,
        delay: Math.random() * 2.2,
        size: Math.random() * 3 + 2,
        duration: Math.random() * 2 + 3,
      }))
    );
  }, []);

  return (
    <section className="relative overflow-hidden pt-16 pb-14">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none animate-float-up"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: "currentColor",
            opacity: 0,
          }}
        />
      ))}

      <h1 className="text-7xl md:text-9xl font-bold tracking-tight leading-none">
        {"About".split("").map((char, i) => (
          <span
            key={i}
            className="inline-block animate-letter-in"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </section>
  );
}
