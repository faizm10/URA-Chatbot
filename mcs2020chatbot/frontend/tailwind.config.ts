import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      //custom colors
      colors: { 
        primary: '#1f2937',
        guelphRed: '#cc0000',
        guelphBlack: '#000',
        guelphYellow: '#ffcc00',
        SoftViolet: '#8956b3',
        SoftBlue: '#6488EA',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
