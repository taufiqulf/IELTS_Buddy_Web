/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EBE4D1",
        secondary: "#26577C",
        tartiary: "#B4B4B3",
        orange: "#E55604",
      },
    },
  },
  plugins: [],
};
