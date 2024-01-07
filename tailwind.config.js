const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    nextui(),
    require('tailwind-scrollbar')({ nocompatible: true }),
]
}