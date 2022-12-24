const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
  addComponents({
    '.prose': {
      '@apply text-sm': {},
      '@apply font-inter font-normal': {}
    },

    '.prose *': {
      '@apply mb-6': {}
    },

    '.prose h1, h2, h3': {
      '@apply font-youtube-sans font-bold': {}
    },

    '.prose h1': {
      '@apply text-5xl': {}
    },

    '.prose h2': {
      '@apply text-3xl': {}
    },

    '.prose h3': {
      '@apply text-xl': {}
    },

    '.prose pre': {
      '@apply px-[14px] py-3': {},
      '@apply rounded-md bg-gray': {}
    },

    '.prose blockquote': {
      '@apply px-5 py-2': {},
      '@apply border-l-4 border-white-pale': {}
    },

    '.prose code': {
      '@apply font-lucida-console font-normal': {}
    }
  });
})
