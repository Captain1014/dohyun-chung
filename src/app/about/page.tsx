import Link from "next/link";
import dynamic from "next/dynamic";

const AboutScene = dynamic(() => import("@/components/AboutScene").then((m) => m.AboutScene), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[60vh] bg-[var(--background)] flex items-center justify-center">
      <p className="font-mono text-[var(--muted)]">Loading...</p>
    </div>
  ),
});

const hobbies = [
  "Reading 📚",
  "Writing ✍🏼",
  "Making Videos 📹",
  "Podcasting 🎙",
  "Learning 🧠",
  "Design 🖌️",
  "Spiritual Circles 📿",
  "Piano 🎹",
  "Cooking 👨🏻‍🍳",
  "Baking 🥧",
  "Football ⚽",
  "Squash 🎾",
  "Padel 🎾",
  "Pickleball 🏓",
  "Skiing ⛷️",
  "Bouldering 🧗🏽",
  "Scuba Diving 🤿",
  "Pottery 🏺",
  "Astrophotography 🌌",
  "Debates 🗣",
  "Hiking ⛰️",
];

const yesList = [
  { text: "Free Palestine 🇵🇸", href: "https://irusa.org/middle-east/palestine/" },
  "Critical Thinking",
  "Stand-up Comedy",
  "Escape Rooms",
  "Dark Humor",
  "Houseplants",
  "Desi Food",
  "The Sea/Ocean",
  "Board Games",
  "Nature",
  "Turtlenecks",
  "Sunshine",
  "Masala Chai",
  "Therapy",
  "Adrenaline",
  "Cheese",
  "Quality Time",
];

const noList = [
  "Group Think",
  "Cities",
  "Western Hegemony",
  "Parties",
  "Gossip",
  "Capitalism",
  "Organized Education",
  "Suits",
  "Concerts",
  "Mainstream Weddings",
  "Sushi",
  "Identity Politics",
  "Postmodernism",
  "Festivals",
  "Drip Coffee",
  "Workism",
  "Pop Culture",
  "Astrology",
  "Individualism",
];

const countries = [
  "Egypt 🇪🇬 👶🏼",
  "UAE 🇦🇪",
  "United States 🇺🇸",
  "Canada 🇨🇦",
  "Mexico 🇲🇽",
  "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "Malaysia 🇲🇾",
  "Turkey 🇹🇷",
  "Saudi Arabia 🇸🇦",
];

const edc = [
  { category: "Everyday Tech", items: ["16\" M3 Pro MacBook Pro", "iPhone 13 Pro", "AirPods Pro (2nd Gen)", "Apple Watch Series 6"] },
  {
    category: "Things I can't leave my apartment without",
    items: ["Takva Prayer Mat", "Nomad Card Wallet", "Anker 621 Magnetic Battery (MagGo)", "Multi-Charging Cable", "Hand Sanitizer", "Lip Balm", "Tide Pen", "Microfiber Cloth"],
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* 3D Hero */}
      <section className="relative w-full min-h-[60vh] flex items-end justify-start pb-8 pl-6 md:pl-14">
        <AboutScene />
        <div className="relative z-10 pointer-events-none max-w-4xl">
          <p className="font-mono text-sm text-white/70 mb-2">7:08 FP</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">About</h1>
          <h2 className="text-xl text-white/80 font-normal drop-shadow">
            welcome to my home on the internet
          </h2>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Intro</h2>
        <p className="mb-4">
          Hi there 👋🏼 I&apos;m Dohyun!
        </p>
        <p className="mb-4">
          I was born and raised in Alexandria, Egypt, and moved to the US for my undergraduate studies. After graduating with a degree in computer science, I began working as a{" "}
          <Link href="/work" className="underline hover:no-underline">
            Product Manager
          </Link>{" "}
          in tech, and I&apos;m currently based in San Francisco.
        </p>
        <p className="mb-4">
          While I love my day job, what gives me life is all the work I do after my 9-5. I spend most of my time after work and on weekends indulging in all sorts of creative activities like writing, podcasting, or video creating. Most of the content I make is targeted towards teaching others whatever humble knowledge or experience I was able to attain as I journey through life.
        </p>
        <p>
          I&apos;d be delighted if you read my{" "}
          <Link href="/blog" className="underline hover:no-underline">blog</Link>, listen to my{" "}
          <a href="https://open.spotify.com/show/647BDylp2P5kUNc0fHyceo" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">podcast</a>, or watch my{" "}
          <a href="https://youtube.com/@omareletr" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">YouTube</a> videos.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {hobbies.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Yes</h2>
        <ul className="space-y-2">
          {yesList.map((item) =>
            typeof item === "string" ? (
              <li key={item}>{item}</li>
            ) : (
              <li key={item.text}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                  {item.text}
                </a>
              </li>
            )
          )}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">No</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {noList.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Countries Visited</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {countries.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">EDC</h2>
        {edc.map(({ category, items }) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-medium mb-2">{category}</h3>
            <ul className="list-disc list-inside space-y-1">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p className="mb-4">
          Set up time to chat online or meet together in person if you&apos;re in The Bay. Coffee&apos;s on me :)
        </p>
        <a
          href="https://cal.com/omareletr/coffee-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 border border-[var(--foreground)] rounded hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
        >
          Coffee Chat
        </a>
      </section>
      </div>
    </div>
  );
}
