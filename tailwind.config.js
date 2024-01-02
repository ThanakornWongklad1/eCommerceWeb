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
        'primary-50': '#AECDFB',
        'primary-500': '#063A88',
        'primary-600': '#005690',
        'primary-700': '#042352',
        'primary-900': '#021736',
        'secondary': '#F45E0C',
        'secondary-100': '#FDDBC9',
        'secondary-300': '#FCC870',
        'linear-green': '#B0E9C9',
        'linear-blue': '#1975B9',
      },
      spacing: {
        '128': '32rem',
        '150': '70rem',
      }
    },
  },
  plugins: [],
}