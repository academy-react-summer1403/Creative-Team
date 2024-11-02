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
        danaRegular: "dana-fanum regular",
      },
      screens: {
        mobile: "460px",
        tablet: "740px",
        laptop: "1200px",
        desktop: "1500px",
        // sm: "395px",
        mob: "395px",
        // md: "1440px",
        modalComment: "851px",
        leftSection: "748px",
      },
      boxShadow: {
        neon: "0 0 5px theme('color.purple.200),",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
