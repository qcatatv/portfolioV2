/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
    },
    colors: {
      'white': '#ffffff',
      'navyellow': '#F4C95D',
      'btnyellow': '#0174BE',
      'darkbtn': '#854D27',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}