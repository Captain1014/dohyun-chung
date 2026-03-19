export interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  description?: string[];
  logo?: string;
}

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer & Technical Customer Lead",
    company: "Kiss Products, Inc.",
    dateRange: "Apr 2024 — Present",
    description: [
      "Primary technical point of contact for 300+ retail platform users — diagnosing daily production issues, driving root-cause resolution, and bridging four stakeholder groups across India and New York.",
    ],
  },
  {
    title: "Front-end Engineer & Product Manager",
    company: "24/7 Teach",
    dateRange: "May 2023 — Apr 2024",
    description: [
      "Led product and front-end for an AI-powered K-12 platform serving 3,000+ students; served as the technical liaison between educators, students, and the engineering team.",
    ],
  },
  {
    title: "Front-end Engineer Intern",
    company: "SkyIT Services",
    dateRange: "Jan 2023 — Apr 2023",
    description: [
      "Built client-facing inventory management and real-time shipment tracking for a B2B logistics platform.",
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
    description: "Launched an enterprise retail OS from zero to production — serving as the technical bridge between 300+ end users, cross-border dev teams, and business stakeholders. Designed architecture, resolved critical incidents, and drove customer adoption.",
    slug: "krs-tpm-case-study",
  },
  {
    title: "Product Information Management (PIM)",
    description: "Led development of a centralized product data platform using AWS and Snowflake — owning end-to-end engineering, employee onboarding, training, and ongoing technical support.",
  },
  {
    title: "Naomi AI (24/7 Teach)",
    description: "Technical liaison between 3,000+ student/teacher users and the engineering team — gathering feedback, triaging issues, and driving product improvements for an AI-powered K-12 learning platform.",
  },
];

export const skillsByCategory: Record<string, string[]> = {
  "Languages": ["Korean (Native)", "English (Fluent)"],
  "Cloud & Data": [
    "AWS",
    "Snowflake",
    "REST API Design",
    "SQL",
    "Microservices Architecture",
    "Data Pipelines",
  ],
  "Technical": [
    "Python",
    "JavaScript/TypeScript",
    "React",
    "HTTP/API Troubleshooting",
    "Web Application Architecture",
  ],
  "Customer-facing": [
    "Technical Troubleshooting",
    "Root-Cause Analysis",
    "Solution Design",
    "Technical Presentations",
    "Customer Onboarding",
    "Cross-border Stakeholder Management",
  ],
  "Product & Process": [
    "Agile / Scrum",
    "PRD Writing",
    "Launch Readiness",
    "Vendor Management",
  ],
  "Tools": [
    "Jira",
    "Figma",
    "Notion",
    "Git",
  ],
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
  "Bilingual (Korean/English) technical professional with 3+ years of customer-facing engineering across global teams. Primary technical point of contact for 300+ enterprise users — diagnosing production issues, driving resolution, and translating complex constraints into business-ready solutions.",
  "Built and launched enterprise SaaS (AWS, Snowflake) from zero to production while bridging four stakeholder groups across India, New York, and Korea. Passionate about helping customers adopt technology and achieve their business goals.",
];

export const aboutPagePath = "/about";

export const contactEmail = "leahchung99@gmail.com";
export const resumeUrl = "/resume_dohyun_chung.pdf";
