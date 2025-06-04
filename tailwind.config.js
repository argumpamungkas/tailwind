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
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggleKey 1s ease-in-out",
      },
      keyframes: {
        wiggleKey: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
