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

    </div>
  );
}
