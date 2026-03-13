import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
        serif: ["Georgia", "serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "marquee-left": "marqueeLeft 40s linear infinite",
        "letter-in": "letterIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "float-up": "floatUp ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        letterIn: {
          "0%": { opacity: "0", transform: "translateY(28px)", filter: "blur(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0px)" },
        },
        floatUp: {
          "0%": { opacity: "0", transform: "translateY(0) scale(0.4)" },
          "25%": { opacity: "0.9" },
          "100%": { opacity: "0", transform: "translateY(-70px) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
