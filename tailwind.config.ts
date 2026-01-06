import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lux: ["Goldman", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(60,242,255,0.35)",
        glowStrong: "0 0 40px rgba(60,242,255,0.55)",
      },
    },
  },
  plugins: [],
} satisfies Config;
