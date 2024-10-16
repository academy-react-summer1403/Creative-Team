/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      tablet: "740px",
      laptop: "1200px",
      desktop: "1500px",
    },
    extend: {
      colors: {
        primary: "2f2f2f",
        myBlue: "3772ff",
      },
    },
  },
  plugins: [],
};
