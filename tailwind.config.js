/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('/public/background.jpg')",
      },
      fontSize: {
        '8.5xl': ['7.3rem', {
          lineHeight: '1',
        }],
        '2.5xl': ['1.7rem', {
          lineHeight: '2.25rem', 
        }]
      },
      maxWidth: {
        '8xl': '88rem',
      }, 
      screens: {
        'sm': '640px',    // Small devices (mobile)
        'md': '768px',    // Medium devices (tablets)
        'lg': '1024px',   // Large devices (laptops)
      }
    },
  },
  plugins: [],
}