import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
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
      gray: {
        light: "#f8f9fa",
        DEFAULT: "#e9ecef",
        dark: "#212529",
      },
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
