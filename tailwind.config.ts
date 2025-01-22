import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#FFAB08",
        color2:"#FF5C00",
        color3:'#F9F9F9',
      },
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
