/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#fd5442",
        secondary: "#ebedef",
      },
      fontFamily: {
        inter : [inter, 'sans-serif']
        lato : [Lato, 'sans-serif']
        SourceSerif4 : ['Source Serif 4', 'serif']
      }
    },
  },
  plugins: [],
};