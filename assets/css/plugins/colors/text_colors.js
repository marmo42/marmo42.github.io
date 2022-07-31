const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.rainbow-text-color': {
      '@apply rainbow-background': {},
      '@apply text-transparent': {},
      'background-clip': 'text'
    },
    
    '.paragraph-text-color': {
      '@apply text-gray-lighter': {},
      '@apply dark:text-white dark:opacity-80': {}
    },
    
    '.title-text-color': {
      '@apply text-gray-light': {},
      '@apply dark:rainbow-text-color': {}
    },
    
    '.subtitle-text-color': {
      '@apply text-gray-light': {},
      '@apply dark:text-white': {}
    }
  })
})
