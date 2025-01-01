/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#0C706A",
        secondary: "#FFD542",
      },
      fontFamily: {
        marcellus: ["Marcellus", "sans-serif"],
      },
    },
  },
  plugins: [],
};
