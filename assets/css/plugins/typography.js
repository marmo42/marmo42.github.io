const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
  addComponents({
    '.prose': {
      '@apply font-inter font-normal': {},
      '@apply text-gray-200 text-base': {}
    },

    '.prose-content p': {
      '@apply my-8': {}
    },

    '.prose h1, h2, h3, h4, h5': {
      '@apply text-white-50 tracking-tight': {}
    },

    '.prose-content h1, h2, h3, h4, h5': {
      '@apply mt-12 mb-8': {},
    },

    '.prose h1, h2, h3': {
      '@apply font-youtube-sans font-bold': {}
    },

    '.prose h4, h5': {
      '@apply font-semibold': {}
    },

    '.prose h1': {
      '@apply text-5xl': {}
    },

    '.prose h2': {
      '@apply text-4xl': {}
    },

    '.prose h3': {
      '@apply text-3xl': {}
    },

    '.prose h4': {
      '@apply text-2xl': {}
    },

    '.prose h5': {
      '@apply text-xl': {}
    },

    '.prose a': {
      '@apply hover:text-blue-400': {},
      '@apply border-b border-dashed border-gray-400 hover:border-solid hover:border-blue-400': {}
    },

    '.prose hr': {
      '@apply w-full my-8': {},
      '@apply border-gray-750': {}
    },

    '.prose ul': {
      '@apply list-disc': {}
    },

    '.prose ol': {
      '@apply list-decimal': {}
    },

    '.prose ul, ol': {
      '@apply list-inside': {}
    },

    '.prose-content ul, ol': {
      '@apply my-8': {}
    },

    '.prose li': {
      '@apply my-4': {},
      '@apply marker:text-gray-750': {}
    },

    '.prose thead': {
      '@apply border-b border-gray-600': {}
    },

    '.prose tr': {
      '@apply border-b border-dashed border-gray-700': {}
    },

    '.prose tr *': {
      '@apply first:pl-0 last:pr-0': {}
    },

    '.prose th': {
      '@apply pt-0': {},
      '@apply font-semibold': {},
      '@apply text-sm text-gray-400': {}
    },

    '.prose td, th': {
      '@apply p-4': {}
    },

    '.prose blockquote': {
      '@apply px-6 py-2': {},
      '@apply border-l border-gray-700': {}
    },

    '.prose blockquote *': {
      '@apply first:mt-0 last:mb-0': {},
    },

    '.prose-content blockquote': {
      '@apply my-8': {},
    },

    '.prose pre': {
      '@apply rounded-lg bg-gray-750 ring-1 ring-1 ring-gray-700': {}
    },

    '.prose-content pre': {
      '@apply my-8 p-4': {},
    },

    '.prose code': {
      '@apply font-consolas font-normal': {},
      '@apply text-sm leading-relaxed': {},
      '@apply rounded-md bg-gray-750': {}
    },

    '.prose-content code': {
      '@apply px-[6px] py-1': {},
    },

    '.prose img': {
      '@apply rounded-lg': {}
    },

    '.prose-content img': {
      '@apply my-8': {}
    },

    '.prose figcaption': {
      '@apply w-full flex justify-center': {},
      '@apply text-gray-400': {}
    },

    '.prose-content figcaption': {
      '@apply my-8': {},
    }
  });
})
