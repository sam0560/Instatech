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
      'primary': '#D7256D',
      'primary-hover': 'rgba(215,37,109,0.5 )',
      'secondary': '#660E39',
      'dark-text': '#34353a',
      'card-bg': 'rgba(215,37,109,0.1)',
      'card-bg-2': 'rgb(250 245 255)',
      'gray' : '#f5f5f5',
      // purple
      'purple-900': 'rgb(88 28 135/1)',
      'purple-100': 'rgb(243 232 255/1)',
      // pink
      'pink-900': 'rgb(181 22 91/1)',
      'pink-100': 'rgb(255 255 255/1)',
      // emerald
      'emerald-900': 'rgb(6 95 70/1)',
      'emerald-100': 'rgb(212 247 229/1)',
      // blue
      'blue-800': 'rgb(30 64 175/1)',
      'blue-100': 'rgb(219 234 254/1)',
      'danger': 'red',
    },
  },
  plugins: [],
};
export default config;
