/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appBlue: "#1668DC",
        offwhite: "#F7F7F9",
      },
      screens: {
        xsm: "10px",
      },
    },
  },
  plugins: [],
};
