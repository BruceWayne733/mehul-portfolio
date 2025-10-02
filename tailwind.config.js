/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',     // Indigo-500
        secondary: '#f1f5f9',   // Slate-100
        accent: '#0f172a',      // Slate-900
      },
    },
  },
  plugins: [],
}
