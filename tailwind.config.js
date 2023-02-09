/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      blue: {
        100: "hsl(225, 21%, 49%)",
        700: "hsl(222, 26%, 31%)",
        800: "hsl(223, 31%, 20%)",
        900: "hsl(224, 36%, 15%)",
      },
      red: {
        500: "hsl(6, 63%, 50%)",
        600: "hsl(6, 70%, 34%)",
      },
      orange: {
        100: "hsl(30, 25%, 89%)",
      },
    },
    boxShadowColor: {
      blue: {
        100: "hsl(224, 28%, 35%)",
      },
      orange: {
        100: "hsl(28, 16%, 65%)",
      },
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    fontWeight: {
      normal: 700,
    },
    extend: {},
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
