import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} — Dohyun Chung
        </p>
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
        >
          Home 1
        </Link>
      </div>
    </footer>
  );
}
