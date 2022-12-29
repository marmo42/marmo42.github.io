const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({}) {}, {
  theme: {
    extend: {
      colors: {
        'black': {
          DEFAULT: '#000',
          900: '#0c0c0c'
        },
        'white': {
          DEFAULT: '#fff',
          50: '#fafafa'
        },
        'gray': {
          900: '#121212',
          800: '#181818',
          700: '#272727',
          400: '#a1a1a1'
        },
        'red': '#ff5f56',
        'yellow': '#ffbd2e',
        'green': '#27c93f'
      }
    }
  }
})
