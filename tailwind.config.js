/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightYellow: "#FFFFE9",
        secondary: "#ebedef",
        primaryBtn: "#F3F25B",
        bgDark: "#201F1F"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        SourceSerif4: ['Source Serif 4', 'serif'],
      }
    },
  },
  plugins: [],
};
