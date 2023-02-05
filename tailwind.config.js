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
        grey: '#555555',
        input: '#EBEBEB',
        orange: '#D6763C',
        modal: 'rgba(214, 118, 60, 0.72)'
      },
    },
  },
  plugins: [require("daisyui")],
};
