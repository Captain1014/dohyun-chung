"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "home" },
  { href: "/work", icon: "command" },
  { href: "/blog", icon: "pencil" },
  { href: "/about", icon: "user" },
  { href: "/gallery", icon: "gallery" },
];

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  command: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01" />
    </svg>
  ),
  pencil: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ),
  user: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  gallery: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
};

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed left-0 bottom-0 w-14 flex flex-col items-center justify-center gap-6 py-6 border-r border-l-2 z-40"
      style={{
        top: "var(--top-bar-height)",
        backgroundColor: "var(--sidebar-bg)",
        borderColor: "var(--sidebar-border)",
        borderLeftColor: "var(--sidebar-accent)",
      }}
    >
      {navItems.map(({ href, icon }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`p-2 rounded transition-colors ${
              isActive
                ? "text-[var(--sidebar-icon-active)]"
                : "text-[var(--sidebar-icon)] hover:text-[var(--sidebar-icon-active)]"
            }`}
            aria-label={href === "/" ? "Home" : href.slice(1)}
          >
            {icons[icon]}
          </Link>
        );
      })}
    </nav>
  );
}
