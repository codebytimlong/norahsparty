/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      standard: {
        DEFAULT: "#FFB6AE",
        darker: "#FF9584",
        accent: "#FFF6F5",
        blue: "#005475",
        lightblue: "#50C7D9",
      },
      vip: {
        DEFAULT: "#FFB6AE",
        darker: "#FF9584",
        accent: "#FFF6F5",
      },
    },
    fontFamily: {
      display: ["Michroma", "sans-serif"],
      body: ["'DM Sans'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
