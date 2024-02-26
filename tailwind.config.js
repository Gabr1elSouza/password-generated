/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
    "color-primary-1": "#8BC34A",
    "color-primary-2": "#8BC34AA6",
    "color-neutral-1": "#f8fafc",
    "color-neutral-2": "#24232b",
    "color-neutral-3": "#13121a"
      }
    },
  },
  plugins: [],
};
