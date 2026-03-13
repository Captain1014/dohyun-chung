"use client";

import { useState } from "react";

export function ProfileImage() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden bg-[var(--border)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] text-sm relative">
      <img
        src="/IMG_1006.jpg"
        alt="Dohyun Chung"
        className="w-full h-full object-cover absolute inset-0"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
      {(!loaded || errored) && (
        <span className="absolute inset-0 flex items-center justify-center bg-[var(--background)]/90">
          Header picture of Dohyun Chung
        </span>
      )}
    </div>
  );
}
