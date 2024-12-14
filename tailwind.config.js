/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        inter: ["Inter Tight", "sans-serif"],
        teko: ["Teko", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      background_color: "#121212",
      primary: "#FAFAFA",
      secondary: "#6535F9",
      blue_color: "#3C6FED",
      bink_color: "#CD4DF9",
      green_color: "#6AC737",
      red_color: "#E65D42",
      gradiant_color: {
        1: "#00F2F2",
        2: "#00FD95",
      },
      customScrollbar: {
        thumb: "#2563eb",
        track: "#f3f4f6",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
