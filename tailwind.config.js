/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      boxShadow: {
        newShadow:
          "-3px -3px 10px rgb(96 165 250 /0.5), 3px 3px 10px rgb(96 165 250 /0.5)",
      },
    },
  },
  plugins: [],
};
