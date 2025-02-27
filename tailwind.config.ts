import { right } from "@popperjs/core";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "275px",
        "400px": "400px",
        tablet: "640px",
        desktop: "1040px",
        1200: "1200px",
        1440: "1440px",
      },
      colors: {
        "black-default": "#161616",
        grey: "#67381A",
        "grey-2": "#BA5C22"
      },
    },
  },
  plugins: [],
};
