import Link from "next/link";
import { experience, projects, skillsByCategory, education, resumeUrl } from "@/data/work";
import { KeywordMarquee } from "@/components/KeywordMarquee";
import { HeroReveal } from "@/components/HeroReveal";

const INTEREST_KEYWORDS = Object.values(skillsByCategory).flat();

export default function WorkPage() {
  return (
    <div>
      <KeywordMarquee keywords={INTEREST_KEYWORDS} />

      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Header */}
        <HeroReveal className="mb-16">
          <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-none mb-3">Work</h1>
              <p className="text-[var(--muted)]">Technical Product Manager & Software Engineer</p>
            </div>
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--foreground)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              >
                Resume
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dohyun-chung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--foreground)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
              >
                LinkedIn
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </header>
        </HeroReveal>

        {/* Experience */}
        <HeroReveal className="mb-16">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-10">Experience</h2>
            <ul className="space-y-10">
              {[...experience].reverse().map((item, i) => (
                <li key={i} className="grid grid-cols-[auto_1fr] gap-x-6 items-start">
                  <div className="text-right">
                    <p className="text-xs font-mono text-[var(--muted)] leading-none mb-0.5">Ch.</p>
                    <p
                      className={`text-6xl font-bold leading-none tabular-nums ${i === 2 ? "" : "text-[var(--muted)] opacity-25"}`}
                      style={i === 2 ? { color: "#fb923c" } : undefined}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="pt-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-[var(--muted)]">{item.company}</p>
                    <p className="text-xs font-mono text-[var(--muted)] mt-1">{item.dateRange}</p>
                    {item.description && item.description.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.description.map((bullet, j) => (
                          <li key={j} className="flex gap-2 text-sm text-[var(--muted)] leading-relaxed">
                            <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[var(--muted)] opacity-50" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </HeroReveal>

        {/* Projects */}
        <HeroReveal className="mb-16">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project, i) => {
                const href = project.slug ? `/work/projects/${project.slug}` : null;
                const inner = (
                  <div className="h-full flex flex-col justify-between gap-4">
                    <div>
                      <h3 className="font-semibold mb-1">{project.title}</h3>
                      {project.description && (
                        <p className="text-sm text-[var(--muted)] leading-relaxed">{project.description}</p>
                      )}
                    </div>
                    {href && (
                      <span className="text-xs font-mono text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                        Read case study →
                      </span>
                    )}
                  </div>
                );

                if (href) {
                  return (
                    <Link
                      key={i}
                      href={href}
                      className="group rounded-lg border border-[var(--border)] p-5 hover:border-[var(--muted)] transition-colors"
                    >
                      {inner}
                    </Link>
                  );
                }
                return (
                  <div key={i} className="rounded-lg border border-[var(--border)] p-5">
                    {inner}
                  </div>
                );
              })}
            </div>
          </section>
        </HeroReveal>

        {/* Skills */}
        <HeroReveal className="mb-16">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-8">Skills</h2>
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, items]) => (
                <div key={category}>
                  <p className="text-xs text-[var(--muted)] mb-3">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full border border-[var(--border)] text-sm opacity-80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </HeroReveal>

        {/* Education */}
        <HeroReveal className="pb-20">
          <section>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-8">Education</h2>
            <ul className="space-y-6">
              {education.map((item, i) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <p className="font-semibold">{item.degree}</p>
                    <p className="text-sm text-[var(--muted)]">{item.school}</p>
                    {item.note && <p className="text-xs text-[var(--muted)] mt-0.5">{item.note}</p>}
                  </div>
                  <span className="text-sm text-[var(--muted)] shrink-0">{item.dateRange}</span>
                </li>
              ))}
            </ul>
          </section>
        </HeroReveal>

      </div>
    </div>
  );
}
