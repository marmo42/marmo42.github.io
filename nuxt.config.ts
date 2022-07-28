import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css',
    '@/assets/css/article.css'
  ],

  components: {
    dirs: [
      '~/components',
      '~/components/global',
      '~/components/global/animation',
      '~/components/global/text',
      '~/components/global/text/sans',
      '~/components/global/text/serif',
      '~/components/global/link',
      '~/components/global/icon',
      '~/components/global/video',
      '~/components/global/list',
      '~/components/global/layout',
      '~/components/global/layout/section',
      '~/components/global/layout/section/content',
      '~/components/global/layout/section/header',
      '~/components/global/layout/section/header/title',
      '~/components/index',
      '~/components/index/layout',
      '~/components/index/layout/section',
      '~/components/about',
      '~/components/about/layout',
      '~/components/about/layout/section',
      '~/components/article',
      '~/components/article/layout',
      '~/components/article/layout/section',
      '~/components/article/layout/section/content',
      '~/components/article/layout/section/content/author',
      '~/components/article/layout/section/list',
      '~/components/article/layout/section/list/item',
      '~/components/article/layout/section/list/item/text'
    ]
  },

  modules: [
    '@nuxt/content'
  ]
})
