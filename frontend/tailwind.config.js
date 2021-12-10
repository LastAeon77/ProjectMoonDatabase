const { url } = require("inspector");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        lor: 'url("../public/static/assets/Library_Background.jpg")',
        loading: 'url("../public/static/assets/Loading_Screeen_2.jpg")'
      },
      fontFamily: {
        lor: ["Nanum Gothic"],
        square: ['NanumSquare'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
