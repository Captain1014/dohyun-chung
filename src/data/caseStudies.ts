export interface CaseStudyOverview {
  product?: string;
  role?: string;
  team?: string;
  coreMission?: string;
  duration?: string;
  stakeholders?: string[];
  tools?: string[];
}

/** Table: rows as string[]. For 2-col use [label, value]. For 3-col (Metric/Before/After), first row = header. */
export interface CaseStudyTable {
  rows: string[][];
}

export interface CaseStudySubsection {
  title: string;
  content: string[];
  /** Optional table. 2 columns = label/value; 3+ columns = first row is header */
  table?: CaseStudyTable;
}

export type CaseStudyDiagramType = "multitenant" | "stakeholder" | "export" | "atomic";

export interface CaseStudySection {
  id: string;
  title: string;
  content: string[];
  subsections?: CaseStudySubsection[];
  /** KRS only: render this diagram at the end of the section */
  diagram?: CaseStudyDiagramType;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  pdfUrl?: string;
  overview?: CaseStudyOverview;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "krs-tpm-case-study",
    title: "K Retail Solutions",
    subtitle: "Building a Multi-Tenant Enterprise Retail OS for Kiss Products",
    pdfUrl: "/KRS_TPM_CaseStudy_EN.pdf",
    overview: {
      product: "K Retail Solutions — Enterprise Retail OS",
      role: "Software Engineer & Technical Customer Lead",
      team: "India vendor dev (10) + India vendor PM + In-house business team (10) + In-house dev team (3)",
      coreMission: "Serve as the technical bridge between 300+ end users, cross-border development teams, and business stakeholders — diagnosing issues, designing solutions, and driving customer adoption",
    },
    sections: [
      {
        id: "scale-architecture",
        title: "1. Scale & Architecture: Multi-tenant Engineering",
        content: [],
        diagram: "multitenant",
        subsections: [
          {
            title: "Theme: From a Single Store to a Global Franchise",
            content: [],
          },
          {
            title: "The Challenge",
            content: [
              "Standard POS systems are one-size-fits-all for single stores. To win enterprise deals, we needed to support Franchise/Group models where Company A and Company B share infrastructure but remain strictly isolated.",
            ],
          },
          {
            title: "The Technical Decision & Trade-offs",
            content: [
              "My in-house dev team and I designed the multi-tenant architecture; the India vendor implemented the modules according to that design (see diagram in this section for layers and trade-offs).",
            ],
          },
          {
            title: "The Crisis & My Role in Recovery",
            content: [
              "The vendor's implementation deviated from the design. The bug was discovered D-30 before launch.",
              "I was part of the in-house dev team that worked overtime to rewrite the affected components.",
              "Root cause: insufficient scope validation and technical handoff processes.",
            ],
          },
          {
            title: "Systemic Fixes I Introduced (Post-Crisis)",
            content: [
              "Scope Confirmation Checklist: Mandatory pre-development alignment between vendor PM, in-house dev, and TPM on every feature.",
              "Cross-team Code Review: Expanded to cover all vendor-written modules before integration.",
              "Technical Design Document gate: Required before any new feature development (first applied to offline mode) — prevents architecture misalignment upfront.",
              "Result: Zero incidents of the same type throughout Phase 2.",
            ],
          },
          {
            title: "Business Impact",
            content: [
              "Tenant onboarding dropped to under 30 minutes (API-driven); zero cross-company leakage via architectural isolation; \"scalable platform\" became a key enterprise differentiator.",
            ],
          },
        ],
      },
      {
        id: "cross-team",
        title: "2. Cross-team Orchestration & Stakeholder Management",
        content: [],
        diagram: "stakeholder",
        subsections: [
          {
            title: "Theme: Navigating 4 Stakeholder Groups in Conflict",
            content: [
              "The four groups and their tension points are summarized in the diagram above.",
            ],
          },
          {
            title: "My Role",
            content: [
              "All four groups had broken down communication with each other but maintained trust in me. I functioned as the de facto communication hub — translating between business language and technical constraints, absorbing conflict, and converting disagreements into actionable decisions.",
              "Note: My contribution here was communication and coordination, not direct implementation (except where noted below).",
            ],
          },
          {
            title: "Case: create_receiving_from_po — Negotiating Under Constraint",
            content: [
              "The conflict: Business team demanded one-click receiving. Engineering pushed back — structural conflict with Odoo's default stock.picking architecture.",
              "How I resolved it: (1) Mapped both sides' core requirements independently to understand real constraints. (2) Proposed Phase 1 / Phase 2 split: Phase 1 preserve existing Odoo structure → unblocks launch; Phase 2 atomic refactor on a defined, committed timeline. (3) Both sides accepted — engineers felt heard, business got a roadmap commitment.",
              "My role in Phase 2 implementation: I also participated in the bug fix and implementation work alongside the engineering team.",
            ],
          },
        ],
      },
      {
        id: "product-vision",
        title: "3. Product Vision: The All-in-One Retail Operating System",
        content: [],
        subsections: [
          {
            title: "Theme: Defining Unified Product Boundaries",
            content: [],
          },
          {
            title: "The Challenge",
            content: [
              "Retailers were exhausted by tool fragmentation — separate POS, Excel payroll, individual purchase portals. This caused data silos, high training costs, and low adoption.",
            ],
          },
          {
            title: "The Decision: Expand Product Boundary",
            content: [
              "I defined the product boundary to encompass the entire retail lifecycle within a single SPA (Single Page Application).",
              "Key architectural decisions I drove (coordinated with engineering team for implementation): Unified UX — single sidebar and layout (main_layout.js) across all modules, one mental model. Shared Patterns — standardized FilterManager and ExportManager across 20+ modules (Payroll, Inventory, Transactions, etc.). Unified Auth — single permission model governing all 20+ modules.",
            ],
          },
          {
            title: "Business Impact",
            content: [
              "Reduced context switching: order management, HR, and logistics in one interface.",
              "Single onboarding story for new store managers — reduced learning curve significantly.",
              "Higher adoption rate vs. fragmented tool alternatives.",
            ],
          },
        ],
      },
      {
        id: "export-pipeline",
        title: "4. Operational Efficiency: Centralized Export Pipeline",
        content: [],
        diagram: "export",
        subsections: [
          {
            title: "Theme: Scalable Data Extraction for Large Datasets",
            content: [],
          },
          {
            title: "The Challenge",
            content: [
              "Legacy POS systems frequently crashed or timed out on large exports (50k+ rows). Export was consistently the most painful step in the audit process.",
            ],
          },
          {
            title: "My Contribution",
            content: [
              "I designed and implemented the centralized pipeline (see diagram in this section): single entry point, lazy loading, and chunked processing so 10k+ row exports run without timeouts. New screens now hook into the pattern in under an hour instead of days.",
            ],
          },
        ],
      },
      {
        id: "atomic-transaction",
        title: "5. Operational Reliability: Atomic Transaction Flow",
        content: [],
        diagram: "atomic",
        subsections: [
          {
            title: "Theme: Supply Chain Consistency via Single-Flow Orchestration",
            content: [],
          },
          {
            title: "The Challenge",
            content: [
              "The Order → Receiving → Invoice → Inventory flow was prone to data inconsistency. Partial saves (e.g., receiving goods without updating the invoice) caused downstream financial report breakage.",
            ],
          },
          {
            title: "The Technical Decision",
            content: [
              "The business team wanted one-click receiving, but the India vendor team opposed it, saying it was a change request that went against Odoo's default structure and could not be done. I resolved the conflict with engineering by brokering the Phase 1/2 split (see Section 2). In Phase 2, I drove implementation with the engineering team so one RPC call runs all four steps atomically (see diagram in this section). No partial state is possible — full traceability and ~80% task-time reduction for receiving managers.",
            ],
          },
        ],
      },
      {
        id: "summary",
        title: "Summary of Impact",
        content: [],
        subsections: [
          {
            title: "",
            content: [],
            table: {
              rows: [
                ["Dimension", "Before", "After"],
                ["Tenant Onboarding", "Manual / Days", "API-driven / < 30 mins"],
                ["Data Integrity", "High risk of silos & drift", "0% inconsistency via Atomic Transactions"],
                ["Export Efficiency", "4+ steps / Frequent timeouts", "1 click / Scalable to 50k+ rows"],
                ["UX Learning Curve", "Fragmented tools", "Single unified Retail OS"],
                ["Cross-team Process", "No scope validation; vendor incidents", "Design Doc gate + code review + scope checklist"],
                ["Stakeholder Alignment", "4 groups in conflict", "Unified via TPM-led communication hub"],
              ],
            },
          },
        ],
      },
      {
        id: "closing",
        title: "",
        content: [
          "\"주문부터 재고까지, 클릭 한 번으로 끝내세요.\" — From Order to Inventory, done in one click.",
        ],
      },
    ],
  },
];

const caseStudiesBySlug = new Map(caseStudies.map((c) => [c.slug, c]));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesBySlug.get(slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}
