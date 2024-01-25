/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans"],
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra-large screens
      },
      colors: {
        custom_orange: "#f6225a",
        custom_dark1: "#20232c",
        custom_dark2: "#1d2028",
        custom_green: "#87c856",
        custom_beig: "#ebeced",
      },
    },
  },
  plugins: [],
};
