/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e0f2fe',
          DEFAULT: '#0ea5e9',
          dark: '#0369a1',
        },
        secondary: {
          light: '#f0fdf4',
          DEFAULT: '#22c55e',
          dark: '#15803d',
        },
        accent: {
          light: '#fff7ed',
          DEFAULT: '#f97316',
          dark: '#c2410c',
        }
      }
    },
  },
  plugins: [],
}
