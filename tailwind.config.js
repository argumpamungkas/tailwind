/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      //  extend dibutuhkan untuk membuat aturan baru
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        oswald: ["oswald"],
        inter: ["inter"],
      },
    },
  },
  plugins: [],
};
