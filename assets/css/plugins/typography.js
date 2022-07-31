const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addComponents }) {
  addComponents({
    '.nuxt-content': {
      '@apply font-sans font-normal': {}
    },

    '.nuxt-content *': {
      '@apply mb-6': {}
    },

    '.nuxt-content p': {
      '@apply text-[22px] leading-[33px]': {},
      '@apply paragraph-text-color': {}
    },

    '.nuxt-content h1, h2, h3': {
      '@apply font-bold': {},
      '@apply subtitle-text-color': {}
    },

    '.nuxt-content h1': {
      '@apply my-10': {},
      '@apply text-[38px] leading-[44px]': {}
    },

    '.nuxt-content h2': {
      '@apply text-[32px] leading-[36px]': {}
    },

    '.nuxt-content h3': {
      '@apply text-[24px] leading-[30px]': {}
    }
  })
})
