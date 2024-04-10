const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1920px) {...}
      },
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
  plugins: [nextui()],
  darkMode: "class",
};
