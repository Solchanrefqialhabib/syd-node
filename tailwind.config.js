/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class', // <-- INI DIA KUNCINYA! Baris ini yang hilang.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: "#00ff9d",
        accentGlow: "#0077FF",
        dark: {
          100: "rgba(30, 30, 30, 0.7)",
          200: "#121212",
        },
      },
      animation: {
        breathingGlow: "breathingGlow 2.5s infinite alternate",
        // PASTIKAN BARIS INI MASIH ADA
        typing: "typing 3.5s steps(40, end), blinkCursor .75s step-end infinite",
      },
      keyframes: {
        breathingGlow: { /* ... */ },
        // PASTIKAN KEYFRAMES INI MASIH ADA
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blinkCursor: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "theme('colors.accentGlow')" },
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;