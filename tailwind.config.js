/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0951BE',
        'primary-700': '#042352',
        'primary-500': '#063A88',
        'secondary': '#F45E0C',
        'secondary-100': '#FDDBC9',
      },
    },
  },
  plugins: [],
}