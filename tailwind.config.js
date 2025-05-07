/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Blue color for navbar and links
        secondary: "#4B5563", // Gray color for text and borders
      },
    },
  },
  plugins: [],
}