/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["'Arimo'", "sans-serif"],
        lato: ["'Lato'", "sans-serif"],
      },
      colors: {
        hero: "#1D1D1D",
        active: "#024E82;",
        checkout: "#D6763C",
        founders: "#FBFBFB",
        testimonialSection: "#E5E5E5",
        testimonialTexts: "#555555",
        testifierName: "#1D1D1D",
        grey: '#555555',
        input: '#EBEBEB',
        orange: '#D6763C',
        modal: 'rgba(214, 118, 60, 0.72)'
      },
      screens: {
        'xs': '360px',
      }
    },
  },
  plugins: [require("daisyui")],
};
