/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Indigo-500
        secondary: "#f1f5f9", // Slate-100
        accent: "#0f172a", // Slate-900
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate3d(-5%, -5%, 0) scale(1)" },
          "50%": { transform: "translate3d(5%, 8%, 0) scale(1.05)" },
          "100%": { transform: "translate3d(-5%, -5%, 0) scale(1)" },
        },
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
