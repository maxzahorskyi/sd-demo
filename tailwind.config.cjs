/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        'secondary-color': '#B08D56',
        'main-gray-color': '#7A7F90',
      }
    }
  },
  plugins: []
};
