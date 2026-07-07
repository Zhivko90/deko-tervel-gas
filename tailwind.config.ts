import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: "#14181A",
          900: "#0F1214",
          800: "#171C1F",
          700: "#1E262A",
          600: "#283237",
        },
        concrete: {
          DEFAULT: "#EDE9E1",
          light: "#F5F2EC",
        },
        paper: "#F2EEE6",
        amber: {
          DEFAULT: "#FFB020",
          deep: "#E8920A",
          soft: "#FFC85A",
        },
        lpg: "#3EA65A",
        muted: {
          dark: "#93A0A7",
          light: "#5E6A70",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hazard":
          "repeating-linear-gradient(135deg, #FFB020 0 16px, #14181A 16px 32px)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "48%": { opacity: "1" },
          "50%": { opacity: "0.72" },
          "52%": { opacity: "1" },
          "70%": { opacity: "0.9" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
      },
      animation: {
        flicker: "flicker 6s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.22,1,0.36,1) both",
        scan: "scan 5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
