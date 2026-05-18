"use client";

import { useState, useEffect } from "react";

const ROLES = [
  "Software Engineer",
  "Technical Consultant",
  "Musician",
  "Dancer",
];

const DURATION_MS = 2800;
const TRANSITION_MS = 700;

export function RotatingTitle() {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  // Cycle: show for DURATION_MS, then trigger exit
  useEffect(() => {
    if (isExiting) return;
    const t = setInterval(() => setIsExiting(true), DURATION_MS);
    return () => clearInterval(t);
  }, [index, isExiting]);

  // Exit animation ends → advance index and trigger enter
  useEffect(() => {
    if (!isExiting) return;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % ROLES.length);
      setIsExiting(false);
      setIsEntering(true);
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [isExiting]);

  // One frame after entering: flip to "visible" so enter animation runs
  useEffect(() => {
    if (!isEntering) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsEntering(false));
    });
    return () => cancelAnimationFrame(id);
  }, [isEntering]);

  return (
    <p
      className="text-lg text-[var(--foreground)] mb-5 min-h-[1.75rem] flex items-center overflow-hidden"
      aria-live="polite"
      aria-label={`Current role: ${ROLES[index]}`}
    >
      <span
        className={`inline-block transition-all duration-[700ms] ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isExiting
            ? "-translate-y-4 opacity-0"
            : isEntering
              ? "translate-y-4 opacity-0"
              : "translate-y-0 opacity-100"
        }`}
      >
        {ROLES[index]}
      </span>
    </p>
  );
}
