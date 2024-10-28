/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#73d3e7',
        'secondary': '#1791a3',
        'tertiary': '#6d868d',
      }
    },
    backgroundImage: {
      'image': "url('../public/background.jpg')",
    },
    screens: {
      'lg': {'max': '2023px'},
      'sm': {'max': '1000px'},
    }
  },
  plugins: [],
}