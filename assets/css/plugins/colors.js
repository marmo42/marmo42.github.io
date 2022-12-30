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
          500: '#717171',
          400: '#a1a1a1',
          300: '#d4d4d4',
          250: '#d6d6d6'
        },
        'red': '#fe004e',
        'yellow': '#ffbd2e',
        'green': '#27c93f',
        'cyan': '#115461'
      }
    }
  }
})
