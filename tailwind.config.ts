import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "60s-stripe": ["var(--font-60s-stripe)"],
      },
      colors: {
        "light-gray": "rgb(169, 169, 169)",
        black: "rgb(18, 18, 18)",
      },
      animation: {
        "radial-gradient": "gradient 20s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
