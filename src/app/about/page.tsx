import Link from "next/link";
import { AboutHero } from "@/components/AboutHero";
import { HeroReveal } from "@/components/HeroReveal";

const skills = {
  confident: [
    { name: "Piano 🎹", note: "years of lessons + still play" },
    { name: "Drums 🥁", note: "another after-school rabbit hole" },
    { name: "Dance 💃", note: "I'm in a lot of Times Square street performance videos on YouTube apparently" },
{ name: "Building apps 💻", note: "things that make my life smarter" },
  ],
  explored: [
    { name: "Taekwondo 🥋", note: "ofc, I'm Korean" },
    { name: "Violin 🎻", note: "got through the painful phase" },
    { name: "Flute 🪈", note: "brief but real" },
    { name: "Arduino 🤖", note: "want to build an auto-watering plant machine + the scariest halloween costume ever" },
  ],
  wantToTry: [
    { name: "Ballet 🩰", note: "always wanted" },
    { name: "Figure Skating ⛸️", note: "someday" },
  ],
};

const languages = [
  { name: "Daegu Korean", note: "home dialect" },
  { name: "Seoul Korean", note: "standard" },
  { name: "English", note: "" },
  { name: "Mandarin", note: "" },
  { name: "Japanese", note: "" },
  { name: "Spanish", note: "" },
  { name: "Greek", note: "" },
  { name: "Albanian", note: "a little" },
];

const countries = [
  "South Korea 🇰🇷 🏠", "United States 🇺🇸", "Guam 🇬🇺",
  "Japan 🇯🇵", "China 🇨🇳", "Hong Kong 🇭🇰", "Taiwan 🇹🇼",
  "Vietnam 🇻🇳", "Italy 🇮🇹", "Greece 🇬🇷",
  "Macedonia 🇲🇰", "Albania 🇦🇱",
];


export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <AboutHero />

      {/* Intro */}
      <HeroReveal className="mb-16">
        <section>
          <p className="text-lg leading-relaxed mb-5">
            Hi! I&apos;m Dohyun — born and raised in South Korea, moved to New York by myself
            to study Computer Science and Sociology at NYU. Lived my dream in the city for
            years, and now I&apos;m taking a big next step: going back to Korea to open a new
            chapter, stay close to my grandmother, and be near the people I love.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            Growing up, both my parents worked hard and didn&apos;t want me sitting home alone
            after school — so they enrolled me in at least two extracurriculars every single day.
            Instruments, dance, sports. You name it, I probably tried it.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            For a long time, that made me feel like I wasn&apos;t truly talented at anything —
            just comfortably <em>mid</em> at everything. But I&apos;ve come to love it. Being
            genuinely curious about many different fields is a superpower, and it&apos;s a big part
            of what makes me a good{" "}
            <Link href="/work" className="underline hover:no-underline">Technical Product Manager</Link>.
          </p>
        </section>
      </HeroReveal>

      {/* Skills */}
      <HeroReveal className="mb-16">
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-6">Things I&apos;ve Picked Up Along the Way</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-mono text-[var(--muted)] mb-4">pretty good at ✓</p>
              <ul className="space-y-4">
                {skills.confident.map(({ name, note }) => (
                  <li key={name}>
                    <p className="font-medium text-sm">{name}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-mono text-[var(--muted)] mb-4">dipped my toes ∼</p>
              <ul className="space-y-4">
                {skills.explored.map(({ name, note }) => (
                  <li key={name}>
                    <p className="font-medium text-sm">{name}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-mono text-[var(--muted)] mb-4">really want to try ◎</p>
              <ul className="space-y-4">
                {skills.wantToTry.map(({ name, note }) => (
                  <li key={name}>
                    <p className="font-medium text-sm">{name}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </HeroReveal>

      {/* Languages */}
      <HeroReveal className="mb-16">
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-4">Languages</h2>
          <p className="text-xs text-[var(--muted)] mb-4">most fluent → least</p>
          <ol className="space-y-2">
            {languages.map(({ name, note }, i) => (
              <li key={name} className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-[var(--muted)] w-4 shrink-0">{i + 1}</span>
                <span className="text-sm">{name}</span>
                {note && <span className="text-xs text-[var(--muted)]">— {note}</span>}
              </li>
            ))}
          </ol>
        </section>
      </HeroReveal>

      {/* Countries */}
      <HeroReveal className="mb-16">
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-4">Countries Visited</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {countries.map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full border border-[var(--border)] text-sm opacity-80">
                {c}
              </span>
            ))}
          </div>
          <p className="text-sm text-[var(--muted)] mb-6">
            I love going back to places I&apos;ve already been — I miss the good times everywhere I&apos;ve gone.
          </p>
          <p className="text-xs text-[var(--muted)]">
            One place I&apos;ll probably never get to: North Korea 🇰🇵 — I&apos;ve watched a lot of documentaries about it. My heart goes out to the people there.
          </p>
        </section>
      </HeroReveal>

      {/* Connect */}
      <HeroReveal className="pb-20">
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-4">Let&apos;s Connect</h2>
          <p className="mb-6 text-[var(--muted)]">
            I&apos;m always happy to meet new people — whether you want to talk tech, travel, language learning, or just say hi. Drop me a line.
          </p>
          <a
            href="mailto:leahchung99@gmail.com"
            className="inline-block px-5 py-2.5 border border-[var(--foreground)] rounded-full text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
          >
            Email me →
          </a>
        </section>
      </HeroReveal>
    </div>
  );
}
