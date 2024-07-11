import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        "440": "440px",
      },
      colors: {
        "dark-background": "#101521",
        "dark-backgroundalt": "#171d2d",
        "dark-secondary": "#2e3a59",
        primary: "#217bd8",
        "dark-textsecondary": "#878a92",
        danger: "#ff6262",
        primarycontent: "#fff",
        "light-backgroundalt": "#f4f7fd",
        "light-textsecondary": "#828282",
        "light-secondary": "#e0e4ed",
      },
    },
  },
  plugins: [],
};
export default config;
