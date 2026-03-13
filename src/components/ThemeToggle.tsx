"use client";

import { useTheme } from "@/components/ThemeProvider";

function playClickSound() {
  if (typeof window === "undefined") return;
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 720;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.06);
  } catch {
    // ignore
  }
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    playClickSound();
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="h-4 w-9 rounded-full bg-[var(--border)] relative flex items-center p-0.5">
        <span
          className={`h-3 w-3 rounded-full bg-[var(--accent)] transition-transform duration-200 ${
            theme === "light" ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </span>
      <span>{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
