/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        forest: "#253B32",
        gold: "#C5A36A",
        cream: "#F8F5EE",
        paper: "#F0ECE3",
        ink: "#24342D",
      },
      fontFamily: {
        sans: ["Tahoma", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 50px rgba(36, 52, 45, 0.10)",
      },
    },
  },
  plugins: [],
};