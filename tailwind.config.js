/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '152': '38rem',
        '144': '36rem',
        '136': '34rem',
        '128': '32rem',
        '120': '30rem',
        '112': '28rem',
      }
    },
  },
  plugins: [],
}