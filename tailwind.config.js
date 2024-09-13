/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "black",
        white: "white",
        red: "red",
        green: "#4ade80",
        gray: "gray",
        yellow: "yellow",
      }
    },
  },
  plugins: [],
}
