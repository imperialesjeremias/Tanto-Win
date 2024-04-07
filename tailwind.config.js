/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          533: "#ABA6A6",
        },
      },
    },
  },
  fontFamily: {
    aileronRegular: ["aileron-regular", "sans-serif"],
    aileronBold: ["aileron-bold", "sans-serif"],
    plain: ["plain-regular", "sans-serif"],
    plainBold: ["plain-bold", "sans-serif"],
    plainNormal: ["plain-normal", "sans-serif"],
    plainLight: ["plain-light", "sans-serif"],
    plainItalic: ["plain-italic", "sans-serif"],
    plainRegular: ["plain-regular", "sans-serif"],
  },
  darkMode: "dark",
  plugins: [nextui()],
};
