import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': 'rgb(37, 78, 112)',
      'primary-hover': 'rgba(37, 78, 112,0.5)',
      'secondary': 'rgb(115, 98, 138)',
      'dark-text': 'rgb(0, 5, 1)',
      'gray': '#f5f5f5',
      'danger': 'red',
    },
  },
  plugins: [],
};
export default config;
