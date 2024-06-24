import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      width: {
        "480": "480px",
      },
    },
  },
  plugins: [],
};
export default config;
