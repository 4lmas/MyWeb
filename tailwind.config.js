/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html",
  "./src/**/*.{vue,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vueDark: '#4B4B4B'
      }
    },
  },
  plugins: [],
}

