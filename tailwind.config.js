/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'green' : {
        100: "#DEEDE2",
        200: "#9BCAA9",
        300: "#59A670",
        400: "#1EA446",
        500: "#356443",
        600: "#122116",
      },
      'neutral': {
        white: "#FFFFFF",
        black: "#000000",
      }
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }
    }
  },
  plugins: [],
}