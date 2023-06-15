/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: "Rubik",
      },
      colors: {
        cDarkGray: "#2d2e37",
        cSilver: "#c4c4c4",
        cBlue: "#3c3abe",
        cWhite: "#fcfcff",
      },
    },
  },
  plugins: [],
};
