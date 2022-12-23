const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
  addComponents({
    '.prose': {
      '@apply font-inter font-normal': {}
    },

    '.prose *': {
      '@apply mb-6': {}
    },

    '.prose p': {
      '@apply text-sm': {}
    },

    '.prose h1, h2, h3': {
      '@apply font-yt-sans font-bold': {}
    },

    '.prose h1': {
      '@apply text-5xl': {}
    },

    '.prose h2': {
      '@apply text-3xl': {}
    },

    '.prose h3': {
      '@apply text-xl': {}
    }
  });
})
