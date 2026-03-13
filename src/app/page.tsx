import { SocialIcons } from "@/components/SocialIcons";
import { HeroBackground } from "@/components/HeroBackground";
import { Profile3DCard } from "@/components/Profile3DCard";
import { StaggerItem } from "@/components/HeroReveal";
import { RotatingTitle } from "@/components/RotatingTitle";

const LOCATION = "New York/Seoul/Wherever";

export default function HomePage() {
  return (
    <div className="max-w-[61.8rem] mx-auto px-6 sm:px-8 py-10 sm:py-12">
      {/* Hero: golden-ratio layout, profile card right-center; pt shifts block down for visual center */}
      <section className="relative min-h-[61.8vh] flex flex-col justify-center pt-[8vh] md:pt-[10vh] mb-20">
        <HeroBackground />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.618fr_1fr] gap-8 md:gap-10 items-center">
          {/* Left: name + content (61.8% of space) */}
          <div className="space-y-8 order-2 md:order-1">
            <StaggerItem delay={0}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] leading-tight">
                Dohyun Chung
              </h1>
            </StaggerItem>
            <div className="space-y-1">
              <StaggerItem delay={80}>
                <RotatingTitle />
              </StaggerItem>
              <StaggerItem delay={160}>
                <div className="mb-4">
                  <SocialIcons />
                </div>
              </StaggerItem>
              <StaggerItem delay={240}>
                <p className="text-sm text-[var(--muted)]">{LOCATION}</p>
              </StaggerItem>
            </div>
          </div>
          {/* Right: profile card, right-aligned and vertically centered */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <Profile3DCard />
          </div>
        </div>
      </section>

      {/* UPDATES - commented out
      <StaggerItem delay={0}>
        <h2 className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-8">
          Updates
        </h2>
      </StaggerItem>
      <ul className="space-y-8">
        {updates.map((update, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
            <span className="text-sm text-[var(--muted)] shrink-0 sm:w-20">
              {update.date}
            </span>
            <div className="flex-1 min-w-0">
              {update.href ? (
                update.href.startsWith("http") ? (
                  <a
                    href={update.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {update.title}
                  </a>
                ) : (
                  <Link href={update.href} className="text-white hover:underline">
                    {update.title}
                  </Link>
                )
              ) : (
                <span className="text-white">{update.title}</span>
              )}
              <div className="mt-2">
                <span className="inline-flex items-center rounded-md border border-[#3b82f6] bg-transparent px-2 py-0.5 text-xs font-medium text-white">
                  {update.category}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      */}
    </div>
  );
}
