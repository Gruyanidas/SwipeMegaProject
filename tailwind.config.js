/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      "3xl": { max: "1800px" },
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      xs: { max: "400px" },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        anek: ["Anek Telugu", "sans-serif"],
      },
      colors: {
        green: {
          100: "#ccfaf9",
          200: "#99f6f3",
          300: "#66f1ec",
          400: "#33ede6",
          500: "#00e8e0",
          600: "#00bab3",
          700: "#008b86",
          800: "#005d5a",
          900: "#002e2d",
        },
        purplish: {
          100: "#e2ccff",
          200: "#c699ff",
          300: "#a966ff",
          400: "#8d33ff",
          500: "#7000ff",
          600: "#5a00cc",
          700: "#430099",
          800: "#2d0066",
          900: "#160033",
        },
        bluish: {
          100: "#d5f8ff",
          200: "#acf1ff",
          300: "#82eaff",
          400: "#59e3ff",
          500: "#2fdcff",
          600: "#26b0cc",
          700: "#1c8499",
          800: "#135866",
          900: "#092c33",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
