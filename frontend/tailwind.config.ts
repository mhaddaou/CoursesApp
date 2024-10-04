import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        gray: "#5B5B5B",
        primary: "#49BBBD",
        secondary: "#92D6D6",
        "blue-light" : "#9DCCFF",
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
  plugins: [nextui()],
};
export default config;
