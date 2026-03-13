"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", num: 1 },
  { href: "/work", label: "Work", num: 2 },
  { href: "/blog", label: "Blog", num: 3 },
  { href: "/about", label: "About", num: 4 },
  { href: "/gallery", label: "Gallery", num: 5 },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--border)] sticky top-0 z-50 bg-[var(--background)]/95 backdrop-blur">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="text-sm font-medium text-[var(--foreground)] hover:underline">
          Dohyun Chung
        </Link>
        <ul className="flex flex-wrap items-center gap-6">
          {navItems.map(({ href, label, num }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm ${
                  pathname === href || (href !== "/" && pathname.startsWith(href))
                    ? "font-semibold text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {label}
                {num}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
