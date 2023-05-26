/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      'xs': {'min': '325px', 'max': '400px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '401px', 'max': '767px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      '3xl': {'min': '768px', 'max': '3000px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': {'min': '1280px', 'max': '1535px'},
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // // => @media (min-width: 1536px) { ... }

      // "3xl": { max: "1800px" },
      // "md": { max: "767px" },
      // "xs": { max: "400px" },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        anek: ["Anek Telugu", "sans-serif"],
      },
      backgroundImage:{
        "gradient" : "bg-gradient-to-tl from-[#12C2E9] to-[#F64F59]"
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
