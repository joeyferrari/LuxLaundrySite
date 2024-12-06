/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F38BA3",
        accent: "#99C5FA",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        "muted-foreground": "hsl(var(--muted-foreground))",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} 