import { AboutHero } from "@/components/AboutHero";
import { HeroReveal } from "@/components/HeroReveal";
import { CopyEmailButton } from "@/components/CopyEmailButton";

const skills = {
  confident: [
    { name: "Piano 🎹", note: "the first instrument I learned" },
    { name: "Drums 🥁", note: "ROCK AND ROLL" },
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
            Instruments, dance, sports. You name it, I probably tried it. Looking back, that&apos;s
            what opened my eyes to so many different worlds.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            There&apos;s a Korean saying I&apos;ve lived by without ever being taught it: 강강약약. Strong
            with the strong, gentle with the gentle. With people who are quieter or more hesitant,
            I naturally slow down — I listen more, check in more, make sure they actually feel
            heard. And with people who can match the energy, I love it: the back and forth, the
            debate, working through hard problems together until something better comes out the
            other side. I didn&apos;t think of any of this as unusual until someone pointed it out.
            That&apos;s just how I&apos;m wired.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            I&apos;m a natural leader — not in the &ldquo;I&apos;ll do everything myself&rdquo; way, but in the way
            that I know how to get the right people moving in the right direction. I come alive when
            I&apos;m leading. Giving people ownership, making things click into place, watching a
            team actually work — that&apos;s where I feel most alive.
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

      {/* Connect */}
      <HeroReveal className="pb-20">
        <section>
          <h2 className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] mb-4">Let&apos;s Connect</h2>
          <CopyEmailButton />
        </section>
      </HeroReveal>
    </div>
  );
}
