/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#0057ff",
        primaryDark: "#012293",
        textLight_dark: "#b2b2b3",
        textMain_dark: "#f9f9fa",
        textMain: "#161f38",
        textLight: "#575861",
        bgMain: "white",
        bgMain_dark: "#272935",
      },
    },
  },
  plugins: [],
};
