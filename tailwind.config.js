/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0261e3",
        textDark: "#082b47",
        textLight: "#ffffff",
      },
    },
  },
  plugins: [],
};
