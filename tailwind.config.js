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
      keyframes: {
        tintFill: {
          "0%": { clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" },
          "100%": { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        },
      },
      animation: {
        "tint-fill": "tintFill 0.4s ease-out forwards", // Adjusted to 0.4s for a faster effect
      },
    },
  },

  plugins: [],
};
