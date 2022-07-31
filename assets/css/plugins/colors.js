const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({}) {}, {
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'white': {
          DEFAULT: '#fff',
          pale: '#fefaf6'
        },
        'gray': {
          DEFAULT: '#191919',
          dark: '#111111',
          light: '#232320',
          lighter: '#656270'
        },
        'blue': {
          DEFAULT: '',
          dark: '#001d9b',
          light: '',
          pale: '#e2e8ff',
        },
        'pink': '#ffc4ff',
        'marmo-pink': '#fa005a',
      }
    }
  }
})
