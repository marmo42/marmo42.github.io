const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({}) {}, {
  theme: {
    extend: {
      colors: {
        'black': {
          DEFAULT: '#000',
          pale: '#0f0f0f'
        },
        'white': {
          DEFAULT: '#fff',
          pale: '#fefaf6'
        }
      }
    }
  }
})
