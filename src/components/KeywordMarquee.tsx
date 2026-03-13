"use client";

export function KeywordMarquee({ keywords }: { keywords: string[] }) {
  const duplicated = [...keywords, ...keywords];

  return (
    <section
      className="w-full border-b border-[var(--border)] bg-[var(--background)] py-3 overflow-hidden"
      aria-label="Interest keywords"
    >
      <div className="keyword-marquee-track flex w-max gap-8 pr-8">
        {duplicated.map((keyword, i) => (
          <span
            key={`${keyword}-${i}`}
            className="shrink-0 text-sm font-medium uppercase tracking-wider text-[var(--muted)] whitespace-nowrap"
          >
            {keyword}
          </span>
        ))}
      </div>
    </section>
  );
}
