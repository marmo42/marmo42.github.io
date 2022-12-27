const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({}) {}, {
  theme: {
    extend: {
      colors: {
        'black': {
          DEFAULT: '#000',
          pale: '#0c0c0c'
        },
        'white': {
          DEFAULT: '#fff',
          pale: '#fafafa'
        },
        'gray': {
          dark: '#121212',
          DEFAULT: '#181818',
          light: '#a1a1a1'
        },
        'red': '#ff5f56',
        'yellow': '#ffbd2e',
        'green': '#27c93f'
      }
    }
  }
})
