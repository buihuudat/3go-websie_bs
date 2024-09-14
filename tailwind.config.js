/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-mode="light"]'],
  theme: {
    extend: {
      colors: {
        mainColor: "#0664A4",
        subColor: "#EFF5FA",
        titleColor: "#0C3958",
        secondGreen: "#8CC542",
        textColor: "#020B12",
        subTextColor: "#868A8D",
        primaryColor: "#0C3958",
      },
    },
  },
  plugins: [],
};
