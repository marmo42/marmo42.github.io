const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.box-shadow': {
      'box-shadow': '0 52px 74px rgba(0, 21, 64, .138559)'
    }
  })
})
