export interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  description?: string[];
  logo?: string;
}

export const experience: ExperienceItem[] = [
  {
    title: "Technical PM & Software Engineer",
    company: "Kiss Products, Inc.",
    dateRange: "Apr 2024 — Present",
    description: [
      "Defined vision, designed multi-tenant architecture, and shipped a full enterprise retail OS end-to-end.",
    ],
  },
  {
    title: "Front-end Engineer & PM",
    company: "24/7 Teach",
    dateRange: "May 2023 — Apr 2024",
    description: [
      "Led product and front-end for Naomi AI, an AI-powered K-12 platform serving 3,000+ students.",
    ],
  },
  {
    title: "Front-end Engineer Intern",
    company: "SkyIT Services",
    dateRange: "Jan 2023 — Apr 2023",
    description: [
      "Built inventory management and shipment tracking for a B2B logistics platform in React.",
    ],
  },
];

export interface ProjectItem {
  title: string;
  description?: string;
  image?: string;
  /** Slug for case study page under /work/projects/[slug]. If set, card links there. */
  slug?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "K Retail Solutions",
    description: "Building a multi-tenant enterprise retail OS for Kiss Products' New York stores — from architecture to launch.",
    slug: "krs-tpm-case-study",
  },
  {
    title: "Naomi AI (24/7 Teach)",
    description: "Strategic UI/UX and front-end for an AI-powered K-12 learning platform serving 3,000+ students; accessibility and usability focus.",
  },
];

export const skillsByCategory: Record<string, string[]> = {
  "Product": [
    "Technical Product Management",
    "Roadmapping",
    "Stakeholder Management",
    "Agile / Scrum",
    "Vendor Management",
    "API Design",
    "Launch Readiness",
    "PRD Writing",
    "Functional Specification",
  ],
  "Engineering": [
    "Full-Stack Development",
    "REST API Design",
    "SQL",
    "Data Visualization",
    "Open Source Platform Development",
  ],
  "Tools": [
    "Jira",
    "Figma",
    "Notion",
  ],
  "Languages": ["Korean (Native)", "English (Fluent)"],
};

export interface EducationItem {
  degree: string;
  school: string;
  dateRange: string;
  note?: string;
}

export const education: EducationItem[] = [
  {
    degree: "B.A. in Computer Science & Sociology",
    school: "New York University",
    dateRange: "Dec 2023",
    note: "Graduate",
  },
];

export const bioParagraphs = [
  "Technical Product Manager and Software Engineer with 3 years of experience delivering complex B2B platforms across retail, edtech, and logistics.",
  "Specializes in cross-cultural stakeholder management, ERP and API systems design, and full-cycle product delivery — from roadmap definition to production engineering.",
];

export const aboutPagePath = "/about";

export const contactEmail = "leahchung99@gmail.com";
export const resumeUrl = "/resume_dohyun_chung.pdf";
