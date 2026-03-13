import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopBar } from "@/components/TopBar";
import { SideNav } from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dohyun Chung",
  description: "Technical Product Manager & Software Engineer. 3 years delivering B2B platforms across retail, edtech, and logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body
        className="min-h-screen antialiased flex flex-col bg-[var(--background)]"
        style={{
          ["--top-bar-height" as string]:
            "calc(max(1.25rem, env(safe-area-inset-top, 1.25rem)) + 3px)",
        }}
      >
        <ThemeProvider>
          <TopBar />
          <SideNav />
          <main
            className="flex-1 pl-0 md:pl-14 min-h-screen"
            style={{ paddingTop: "var(--top-bar-height)" }}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
