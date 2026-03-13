export interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  description?: string[];
  logo?: string;
}

export const experience: ExperienceItem[] = [
  {
    title: "PM & Software Engineer",
    company: "Kiss Products, Inc.",
    dateRange: "Apr 2024 — Present",
    description: [
      "Governed launch readiness and strategic vision of a multi-tenant B2B retail ordering platform (POS); defined feature roadmap and licensing strategy. Authored Technical Specifications and acted as Technical PM, translating ERP data exchange requirements into secure, scalable API designs.",
      "Oversaw Agile program execution across complex program streams, managing a global vendor team and cross-functional stakeholders (IT and business).",
      "Engineered the sales order app for Kiss Europe with offline capability for unstable network environments.",
      "Drove full lifecycle development of internal systems: Cafeteria Kiosk, helpdesk software, hardware integration (RFID, touch), and data visualization for kitchen display TV.",
    ],
  },
  {
    title: "PM & Front-end Engineer",
    company: "24/7 Teach",
    dateRange: "May 2023 — Apr 2024",
    description: [
      "Drove strategic UI/UX decisions for \"Naomi AI,\" ensuring high usability and accessibility for 3,000+ K-12 students.",
      "Collaborated with CEO and Marketing to analyze conversion data, influencing feature prioritization and user retention.",
      "Defined data retrieval requirements and optimized API payloads with the backend team for critical student-facing features.",
      "Designed and implemented features with curriculum designers, translating engagement analytics and teacher feedback into product improvements.",
    ],
  },
  {
    title: "Front-end Engineer Intern",
    company: "SkyIT Services",
    dateRange: "Jan 2023 — Apr 2023",
    description: [
      "Engineered the client-side experience for a B2B logistics platform using React: inventory management and real-time shipment tracking.",
      "Collaborated with back-end engineers to define and optimize API consumption patterns.",
      "Applied Agile methodologies; led on-time deployment of a key client-facing dashboard feature.",
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
    title: "Kiss POS (KRS)",
    description: "Re-architecting retail operations for global scalability: multi-tenant engineering and process recovery.",
    slug: "krs-tpm-case-study",
  },
  {
    title: "Naomi AI (24/7 Teach)",
    description: "Strategic UI/UX and front-end for an AI-powered K-12 learning platform serving 3,000+ students; accessibility and usability focus.",
  },
  {
    title: "Kiss Europe Sales Order App",
    description: "End-to-end sales order application with offline capability for field use in unstable network environments.",
  },
  {
    title: "Cafeteria Kiosk & Helpdesk",
    description: "Internal systems with hardware integration (RFID, touch), kitchen display TV data visualization, and automated Windows scripting.",
  },
  {
    title: "B2B Logistics Platform (SkyIT)",
    description: "React-based inventory management and real-time shipment tracking for a B2B logistics client.",
  },
];

export const skillsByCategory: Record<string, string[]> = {
  "Product & Engineering": [
    "Technical Product Management",
    "B2B E-commerce Strategy",
    "API Analysis & Integration",
    "Software Engineering",
    "PRD / Functional Specification",
    "Agile Project Management (Jira)",
    "Quantitative Data Analysis (SQL)",
  ],
  "Tools & Methods": [
    "Jira",
    "React",
    "SQL",
    "Figma",
    "Data Visualization",
  ],
  "Languages": ["English", "Korean (Bilingual)"],
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
  "I'm a Technical Product Manager and Software Engineer based in New York. I work at the intersection of product, engineering, and design—from defining roadmaps and writing Technical Specs to building client-side applications and APIs.",
  "At Kiss Products I lead launch readiness for a B2B retail platform and engineer internal tools; previously I drove UI/UX and front-end for 24/7 Teach's Naomi AI (3,000+ K-12 students) and shipped features for B2B logistics at SkyIT.",
  "I focus on user-centric solutions, clear execution, and strong collaboration with global and cross-functional teams.",
];

export const aboutPagePath = "/about";

export const contactEmail = "leahchung99@gmail.com";
export const resumeUrl = "#"; // Replace with your hosted PDF URL when available
