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
          pale: '#f1f1f1'
        },
        'gray': '#272727',
        'red': '#ff5f56',
        'yellow': '#ffbd2e',
        'green': '#27c93f'
      }
    }
  }
})
