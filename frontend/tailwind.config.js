/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Correct placement of darkMode
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
