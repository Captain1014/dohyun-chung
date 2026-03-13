"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function TopBar() {
  return (
    <>
      {/* Spacer so content isn't hidden under browser address bar */}
      <div
        className="bg-[var(--background)]"
        style={{ height: "max(1.25rem, env(safe-area-inset-top, 1.25rem))" }}
      />
      <div className="h-[3px] bg-[var(--accent)] flex items-center justify-end px-4 -mt-px">
        <ThemeToggle />
      </div>
    </>
  );
}
