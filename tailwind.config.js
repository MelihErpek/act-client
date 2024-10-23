/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        deneme: -30,
        deneme2: -20,
      },
      width: {
        login: 700,
      },
    },
  },
  plugins: [],
};
