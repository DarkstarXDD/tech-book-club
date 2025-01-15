import type { Config } from "tailwindcss"

export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      md: "48rem",
      lg: "90rem", // Change later after testing
    },

    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      "martian-mono": ["var(--font-martian-mono)", "monospace"],
    },

    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2.125rem",
      "3xl": "2.375rem",
      "4xl": "3.125rem",
      "5xl": "3.875rem",
    },

    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },

    lineHeight: {
      tighter: "1.1",
      tight: "1.2",
      snug: "1.3",
      normal: "1.4",
    },

    letterSpacing: {
      tighter: "-0.125rem",
      tight: "-0.0625rem",
      normal: "-0.03125rem",
    },

    colors: {
      transparent: "transparent",
      neutral: {
        0: "hsl(0, 0%, 100%)",
        100: "hsl(17, 41%, 97%)",
        200: " hsl(17, 12%, 89%)",
        700: "hsl(195, 23%, 28%)",
        900: "hsl(194, 78%, 11%)",
      },

      "light-salmon": {
        50: "hsl(22, 100%, 97%)",
        100: "hsl(22, 100%, 91%)",
        500: "hsl(22, 99%, 72%)",
      },
    },

    extend: {
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ffe2d1 0%, #fff5ef 100%)",
        "gradient-text":
          "linear-gradient(107deg, #ff9a60 -11.37%, #062630 61.84%)",
      },
    },
  },
  plugins: [],
} satisfies Config
