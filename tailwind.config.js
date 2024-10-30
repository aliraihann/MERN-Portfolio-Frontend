/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  mode: 'jit',
  theme: {
    backgroundImage: {
      'image': "url('/public/background.jpg')",
    },
    screens: {
      'sm': '640px',    // Small devices (mobile)
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (laptops)
      'xl': '1280px',   // Extra large devices (desktops)
      '2xl': '1536px'   // Extra extra large devices
    }
  },
  plugins: [],
}