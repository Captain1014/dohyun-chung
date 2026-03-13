export type UpdateCategory =
  | "Work"
  | "Public Speaking"
  | "Hobbies"
  | "Life"
  | "Content Creation";

export interface Update {
  date: string;
  title: string;
  category: UpdateCategory;
  href?: string;
}

export const updates: Update[] = [
  {
    date: "Apr 2024",
    title: "Joined Kiss Products, Inc. as a Software Engineer & TPM.",
    category: "Work",
  },
  {
    date: "May 2023",
    title: "Joined 24/7 as a Software Engineer & PM.",
    category: "Work",
  },
];
