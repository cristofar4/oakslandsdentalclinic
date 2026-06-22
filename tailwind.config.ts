import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Oaklands brand palette
        navy: {
          DEFAULT: "#0B2447",
          50: "#eef2f9",
          100: "#d6e0f0",
          200: "#aec1e0",
          300: "#7e9bcb",
          400: "#4f72b0",
          500: "#2f5191",
          600: "#1d3a72",
          700: "#143058",
          800: "#0f2444",
          900: "#0B2447",
          950: "#06142b",
        },
        gold: {
          DEFAULT: "#C9A24B",
          50: "#fbf7ec",
          100: "#f4e9c8",
          200: "#ead08e",
          300: "#dfb65c",
          400: "#C9A24B",
          500: "#b58a35",
          600: "#946c2a",
          700: "#704f24",
          800: "#4f3820",
          900: "#34261a",
        },
        teal: {
          DEFAULT: "#2BA89E",
          50: "#eafaf7",
          100: "#c9f0ea",
          200: "#97e0d6",
          300: "#5fcabd",
          400: "#2BA89E",
          500: "#1f8a82",
          600: "#196f69",
          700: "#175955",
          800: "#144745",
          900: "#123b3a",
        },
        ivory: "#F8F7F3",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        "fluid-display": "clamp(2.75rem, 7vw, 6rem)",
        "fluid-h1": "clamp(2.25rem, 5vw, 4.25rem)",
        "fluid-h2": "clamp(1.875rem, 3.5vw, 3rem)",
        "fluid-h3": "clamp(1.375rem, 2vw, 1.875rem)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(11, 36, 71, 0.08), 0 12px 32px -8px rgba(11, 36, 71, 0.10)",
        glow: "0 20px 60px -12px rgba(11, 36, 71, 0.25)",
        gold: "0 12px 40px -12px rgba(201, 162, 75, 0.45)",
        "inner-light": "inset 0 1px 0 0 rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "grid-navy":
          "linear-gradient(to right, rgba(11,36,71,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,36,71,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(43,168,158,0.10), transparent 60%)",
        "gold-sheen":
          "linear-gradient(110deg, #C9A24B 0%, #e7c878 45%, #C9A24B 90%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        shimmer: "shimmer 2.5s infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
