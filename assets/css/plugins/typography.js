const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
  addComponents({
    '.prose': {
      '@apply text-white-pale text-sm': {},
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

    '.prose a': {
      '': {}
    },

    '.prose hr': {
      '@apply border-white/10': {}
    },

    '.prose pre': {
      '@apply px-[14px] py-3': {},
      '@apply rounded-md bg-gray': {}
    },

    '.prose blockquote': {
      '@apply px-5 py-2': {},
      '@apply border-l-4 border-white-pale': {}
    },

    '.prose blockquote *': {
      '@apply last:mb-0': {},
    },

    '.prose code': {
      '@apply font-lucida-console font-normal': {}
    },

    '.prose img': {
      '@apply rounded-2xl': {}
    },

    '.prose figcaption': {
      '@apply w-full flex justify-center': {},
      '@apply text-gray-light': {}
    }
  });
})
