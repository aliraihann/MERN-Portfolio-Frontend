/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  theme: {
    backgroundImage: {
      'image': "url('/public/background.jpg')",
    },
    screens: {
      'sm': '640px',    // Small devices (mobile)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (laptops)
    }
  },
  plugins: [],
}