import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      red: {
        light: "#f14950",
        DEFAULT: "#ed1c24",
        dark: "#d51920",
      },
      blue: "#243F8F",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
