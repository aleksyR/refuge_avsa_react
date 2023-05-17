/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-section": "url('../assets/images/bergerallemand.jpg')",
      },
      colors: {
        whiteText: "#F5F5F5",
        blackText: "#1D242D",
        greenAsset: "#005f61",
        iconColor: "#B0CDCE",
        bgLight: "#E6EFEF",
        bgDark: "#002122",
      },
    },
  },
  plugins: [],
};
