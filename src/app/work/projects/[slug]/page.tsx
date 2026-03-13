import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/data/caseStudies";
import {
  MultiTenantDiagram,
  StakeholderDiagram,
  ExportPipelineDiagram,
  AtomicFlowDiagram,
} from "@/components/KRSDiagrams";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return { title: "Project" };
  return {
    title: `${caseStudy.title} — Dohyun Chung`,
    description: caseStudy.subtitle,
  };
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
      {/* Back link */}
      <nav className="mb-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Work
        </Link>
      </nav>

      {/* Hero */}
      <header className="mb-14">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-2">
          {caseStudy.title}
        </h1>
        <p className="text-lg text-[var(--muted)]">{caseStudy.subtitle}</p>
      </header>

      {/* Overview: Product, Role, Team, Core Mission */}
      {caseStudy.overview && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {caseStudy.overview.product && (
            <OverviewCard label="Product" value={caseStudy.overview.product} />
          )}
          {caseStudy.overview.role && (
            <OverviewCard label="Role" value={caseStudy.overview.role} />
          )}
          {caseStudy.overview.team && (
            <OverviewCard label="Team" value={caseStudy.overview.team} />
          )}
          {caseStudy.overview.coreMission && (
            <OverviewCard label="Core Mission" value={caseStudy.overview.coreMission} />
          )}
          {caseStudy.overview.duration && (
            <OverviewCard label="Project Duration" value={caseStudy.overview.duration} />
          )}
          {caseStudy.overview.stakeholders && caseStudy.overview.stakeholders.length > 0 && (
            <OverviewCard
              label="Stakeholders"
              value={caseStudy.overview.stakeholders.join(", ")}
            />
          )}
          {caseStudy.overview.tools && caseStudy.overview.tools.length > 0 && (
            <OverviewCard label="Tools Used" value={caseStudy.overview.tools.join(", ")} />
          )}
        </section>
      )}

      {/* Sections */}
      <div className="space-y-16">
        {caseStudy.sections.map((section) => (
          <SectionBlock key={section.id} section={section} slug={slug} />
        ))}
      </div>

      {/* Back to work at bottom */}
      <footer className="mt-20 pt-8 border-t border-[var(--border)]">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Work
        </Link>
      </footer>
    </div>
  );
}

function OverviewCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="rounded-lg border p-5"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      <p
        className="text-xs font-medium uppercase tracking-wider mb-2"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </p>
      <p style={{ color: "var(--foreground)" }}>{value}</p>
    </div>
  );
}

function SectionBlock({
  section,
  slug,
}: {
  section: {
    id: string;
    title: string;
    content: string[];
    subsections?: { title: string; content: string[]; table?: { rows: string[][] } }[];
    diagram?: "multitenant" | "stakeholder" | "export" | "atomic";
  };
  slug: string;
}) {
  const hasSubsections = section.subsections && section.subsections.length > 0;
  const hasTitle = section.title.length > 0;
  const isClosing = !hasTitle && section.content.length > 0 && !hasSubsections;
  const showDiagram = slug === "krs-tpm-case-study" && section.diagram;

  return (
    <section id={section.id || undefined} className="scroll-mt-8">
      {hasTitle && (
        <h2 className="text-base font-semibold text-[var(--accent)] border-b border-[var(--border)] pb-2 mb-6">
          {section.title}
        </h2>
      )}

      {/* Diagram first (KRS only) */}
      {showDiagram && (
        <div className="mb-10">
          {section.diagram === "multitenant" && <MultiTenantDiagram />}
          {section.diagram === "stakeholder" && <StakeholderDiagram />}
          {section.diagram === "export" && <ExportPipelineDiagram />}
          {section.diagram === "atomic" && <AtomicFlowDiagram />}
        </div>
      )}

      {!hasSubsections && (
        <div className={isClosing ? "rounded-lg border border-[var(--border)] bg-[var(--card)]/50 px-5 py-4" : "space-y-4"}>
          {section.content.map((paragraph, i) => (
            <p
              key={i}
              className={`text-[var(--foreground)] leading-relaxed ${isClosing ? "text-center italic" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {hasSubsections && (
        <div className="space-y-8">
          {section.content.length > 0 && (
            <div className="space-y-4">
              {section.content.map((p, i) => (
                <p key={i} className="text-[var(--foreground)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          )}
          {section.subsections!.map((sub, j) => (
            <div key={j}>
              {sub.title.length > 0 && (
                <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight mb-3 mt-1 border-l-2 border-[var(--accent)] pl-3 -ml-px">
                  {sub.title}
                </h3>
              )}
              {sub.content.length > 0 && (
                <div className="space-y-4 mb-4">
                  {sub.content.map((p, i) => (
                    <p
                      key={i}
                      className="text-[var(--foreground)] leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {sub.table && sub.table.rows.length > 0 && (
                <div className="rounded-lg border border-[var(--border)] overflow-hidden">
                  <table className="w-full text-sm">
                    {sub.table.rows[0].length >= 3 ? (
                      <>
                        <thead>
                          <tr className="border-b border-[var(--border)]">
                            {sub.table.rows[0].map((cell, c) => (
                              <th
                                key={c}
                                className="py-3 px-4 text-left font-medium text-[var(--foreground)] bg-[var(--border)]/50"
                              >
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sub.table.rows.slice(1).map((row, r) => (
                            <tr key={r} className="border-b border-[var(--border)] last:border-0">
                              {row.map((cell, c) => (
                                <td key={c} className="py-3 px-4 text-[var(--foreground)]">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </>
                    ) : (
                      <tbody>
                        {sub.table.rows.map((row, r) => (
                          <tr key={r} className="border-b border-[var(--border)] last:border-0">
                            <td className="py-3 px-4 bg-[var(--border)]/50 font-medium text-[var(--foreground)] align-top w-36 shrink-0">
                              {row[0]}
                            </td>
                            <td className="py-3 px-4 text-[var(--foreground)]">
                              {row[1]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
