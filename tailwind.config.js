/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arimo': ["'Arimo'", "sans-serif"],
        'lato': ["'Lato'", "sans-serif"]
      },
      colors: {
        hero: "#1D1D1D",
        active:"#024E82;",
        checkout:"#D6763C"
      }
    },
  },
  plugins: [require("daisyui")],
}
