/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFmily: {
        body: ["nunito"],
        vazir: ["Vazir"],
      },
      screens: {
        mobile: "393px",
        sourcePage: "1440px",
        modalComment: "851px",
        leftSection: "748px",
      },
      boxShadow: {
        neon: "0 0 5px theme('color.purple.200),",
      },
    },
  },
  plugins: [],
};
