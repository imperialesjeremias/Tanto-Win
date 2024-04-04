/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      plain: ['plain-regular', 'sans-serif'],
      plainBold: ['plain-bold', 'sans-serif'],
      plainNormal: ['plain-normal', 'sans-serif'],
      plainLight: ['plain-light', 'sans-serif'],
      plainItalic: ['plain-italic', 'sans-serif'],
    }
  },
  plugins: [require("daisyui")],
}