import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "chelsea-blue": "#034694",
        "chelsea-gold": "#DBA111",
        "spurs-silver": "#c4ced4",
        surface: "#111115",
        "surface-2": "#1a1a1f",
      },
    },
  },
  plugins: [],
};
export default config;
