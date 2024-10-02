import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        gray: "#5B5B5B",
        primary: "#49BBBD",
        secondary: "#92D6D6",
      },
      keyframes: {
        fadeRight: {
          "0%": { transform: "translateX(130%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeUp:{
          "0%" : {transform: "translateY(40px)"},
          "100%": { transform: "translateX(0)" },
        },
        fadeDown:{
          "0%" : {transform: "translateY(40px)"},
          "100%": { transform: "translateX(0)" },
        }
      },
      animation: {
        fadeRight: "fadeRight 1.5s ease-in-out",
        fadeUp : "fadeUp 1.5s ease-in-out",
        fadeDown : "fadeDown 1.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
