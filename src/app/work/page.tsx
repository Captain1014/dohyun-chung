import Link from "next/link";
import {
  experience,
  projects,
  skillsByCategory,
  education,
  bioParagraphs,
  aboutPagePath,
  contactEmail,
  resumeUrl,
} from "@/data/work";
import { KeywordMarquee } from "@/components/KeywordMarquee";

const WORK_LOCATION = "NEW YORK, NY";

const INTEREST_KEYWORDS = [
  "Data Based Decision Making",
  "Product Strategy",
  "User Research",
  "Metrics & Analytics",
  "Cross-functional Leadership",
  "Roadmap Prioritization",
  "A/B Testing",
  "Stakeholder Alignment",
  "OKRs",
  "Discovery & Delivery",
];

function ExperienceLogo({ company }: { company: string }) {
  const initial = company.charAt(0).toUpperCase();
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--border)] text-sm font-medium text-[var(--muted)]">
      {initial}
    </div>
  );
}

export default function WorkPage() {
  return (
    <div>
      <KeywordMarquee keywords={INTEREST_KEYWORDS} />
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--foreground)] mb-2">Work</h1>
          <p className="text-[var(--muted)] text-lg">
            an overview of my career
          </p>
        </header>

        {/* Profile Section */}
        <section className="flex flex-col items-center text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-1">
            Dohyun Chung
          </h2>
        <p className="text-[var(--muted)] mb-6">Technical Product Manager</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <a
            href={resumeUrl}
            target={resumeUrl.startsWith("http") ? "_blank" : undefined}
            rel={resumeUrl.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
          >
            Résumé
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-4 py-2.5 text-sm font-medium text-[var(--background)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            LinkedIn
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
          <p className="text-sm text-[var(--muted)]">{WORK_LOCATION}</p>
          <a href={`mailto:${contactEmail}`} className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] mt-1 inline-block">
            {contactEmail}
          </a>
        </section>

        {/* BIO */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-6">
          Bio
        </h2>
        <div className="space-y-4 text-[var(--foreground)]">
          {bioParagraphs.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
          <p className="leading-relaxed">
            If you're interested in what I do outside of work, check out my{" "}
            <Link href={aboutPagePath} className="underline hover:no-underline">
              about
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

        {/* EXPERIENCE */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-8">
          Experience
        </h2>
        <ul className="space-y-5">
          {experience.map((item, i) => (
            <li key={i} className="flex items-center gap-4 sm:gap-6">
              <ExperienceLogo company={item.company} />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-[var(--foreground)]">{item.title}</p>
                <p className="text-sm text-[var(--muted)]">{item.company}</p>
              </div>
              <span className="shrink-0 text-sm text-[var(--muted)] whitespace-nowrap">
                {item.dateRange}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS PORTFOLIO */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-2">
          Projects
        </h2>
        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-8">
          Portfolio
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const href = project.slug
              ? `/work/projects/${project.slug}`
              : null;
            const content = (
              <>
                <div className="aspect-[4/3] rounded-md bg-[var(--border)] mb-4 flex items-center justify-center text-[var(--muted)] text-sm">
                  {project.slug ? "Case Study" : "Illustration"}
                </div>
                <h3 className="font-semibold text-[var(--foreground)]">{project.title}</h3>
                {project.description && (
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {project.description}
                  </p>
                )}
                {href && (
                  <span className="inline-block mt-2 text-xs font-medium text-[var(--accent)]">
                    Read case study →
                  </span>
                )}
              </>
            );
            if (href) {
              return (
                <Link
                  key={i}
                  href={href}
                  className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 overflow-hidden block hover:border-[var(--muted)] transition-colors"
                >
                  {content}
                </Link>
              );
            }
            return (
              <div
                key={i}
                className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 overflow-hidden"
              >
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-8">
          Skills
        </h2>
        <div className="space-y-8">
          {Object.entries(skillsByCategory).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-[var(--foreground)] font-medium mb-3">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-[var(--accent)] bg-transparent px-3 py-1.5 text-xs font-medium text-[var(--foreground)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-20">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-8">
          Education
        </h2>
        <ul className="space-y-6">
          {education.map((item, i) => (
            <li key={i} className="flex items-start gap-4 sm:gap-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--border)] text-sm font-medium text-[var(--muted)]">
                {item.school.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-[var(--foreground)]">{item.degree}</p>
                <p className="text-sm text-[var(--muted)]">{item.school}</p>
                {item.note && (
                  <p className="text-xs text-[var(--muted)] mt-1">{item.note}</p>
                )}
              </div>
              <span className="shrink-0 text-sm text-[var(--muted)] whitespace-nowrap">
                {item.dateRange}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* CONTACT */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-8">
          Contact
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
          >
            Hire Me
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
          >
            Coffee Chat
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
          >
            1:1 Mentorship
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 17l6-6-6-6" />
              <path d="M12 19h8" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px flex-1 bg-[var(--border)]" />
          <span className="text-sm text-[var(--muted)]">or</span>
          <span className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <form className="space-y-4 max-w-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--border)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--muted)] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--border)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--muted)] focus:outline-none"
            />
          </div>
          <textarea
            placeholder="I actually look at these. Please feel free to type your message here and I'll get back to you asap :)"
            rows={5}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--border)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--muted)] focus:outline-none resize-y"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-[var(--foreground)] px-8 py-3 text-sm font-medium text-[var(--background)] hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      </div>
    </div>
  );
}
