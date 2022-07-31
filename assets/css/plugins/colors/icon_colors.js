const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.default-icon-color': {
      '@apply bg-gray-light': {},
      '@apply dark:bg-white': {}
    }
  })
})
