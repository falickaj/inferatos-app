module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/data/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    colors: {
      primary: "#40E0D0",
      black: "#070707",
      gray: "#5C6B73",
      white: "#FAF9F9",
      dark: "#161616",
    },
  },
  plugins: [],
};
