/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#E39986",
        white: "#FFFFFF",
        bluePlay: "#092F94",
        greenXbox: "#2CA243",
      },
    },
  },
  plugins: [],
};
