/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    scrollbar: 'dark',
  },
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-gray':'#555555',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
]
}