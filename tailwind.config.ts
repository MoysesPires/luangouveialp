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
        main: "url('/img-bg.svg')"
      },
      mixBlendModes: {
        overlay: "overlay",
      },
      colors: {
        base: {
          black: "#09090B",
          white: "#ffffff",
          gray: "#ADADAD",
        },
        primary: {
          50: "#D2EFE1",
          100: "#C5EAD9",
          200: "#3BB77E",
        },
        yellow: {
          50: "#FFD480",
          100: "#FDC040",
        },
        
      },
    },
  },
  plugins: [],
};
export default config;
