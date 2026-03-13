"use client";

import { useState } from "react";

export function WorkProfileImage() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden bg-[var(--border)] mb-6 relative">
      <img
        src="/IMG_1006.jpg"
        alt="Dohyun Chung"
        className="w-full h-full object-cover absolute inset-0"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
      {(!loaded || errored) && (
        <span className="absolute inset-0 flex items-center justify-center text-[var(--muted)] text-sm bg-[var(--background)]/90">
          Header image of Dohyun Chung
        </span>
      )}
    </div>
  );
}
