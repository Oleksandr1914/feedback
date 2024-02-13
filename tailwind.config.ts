import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-fon": "url(/src/assets/images/coffee.jpg)",
      },
    },
    colors: {
      textColor: "#222",
      borderInput: "#222",
      buttom: "#fb9b0c",
      white: "#ffff",
    },
    screens: {
      mobile: "480px",
      tablet: "640px",
      laptop: "1024px",
    },
  },
  plugins: [],
};
export default config;
