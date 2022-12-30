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
          800: '#18181b',
          700: '#27272a',
          500: '#717171',
          400: '#a1a1aa',
          300: '#d4d4d4',
          200: '#e4e4e7'
        },
        'red': '#fe004e',
        'blue': '#1a62ff',
        'pink': '#ec4899',
        'purple': '#a855f7'
      }
    }
  }
})
