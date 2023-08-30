import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-app": {
          500: "#628E75",
          700: "#1A4855",
        },
      },

      height: {
        app: "calc(100vh - 6rem)",
      },

      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },

      animation: {
        float: "float 6s infinite",
      },

      skew: {
        'skew-app': '-24deg'
      }
    },
  },
  plugins: [],
};
export default config;
