/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#73d3e7',
        'secondary': '#1791a3',
        'tertiary': '#6d868d',
      },
      backgroundImage: {
        'image': "url('/public/background.jpg')",
      },
      fontSize: {
        '2.5xl': ['1.7rem', {
          lineHeight: '2.25rem', 
        }],
        '5.5xl': ['3rem', {
          lineHeight: '1',
        }],
        '8.5xl': ['7.3rem', {
          lineHeight: '1',
        }],
        '10xl': ['9rem', {
          lineHeight: '1',
        }],
      },
      maxWidth: {
        '8xl': '88rem',
      }, 
      screens: {
        'sm': '640px',    // Small devices (mobile)
        'md': '768px',    // Medium devices (tablets)
        'lg': '1024px',   // Large devices (laptops)
        'xl': '1904px',   // Extra-large devices (desktops)
      }
    },
  },
  plugins: [],
}