export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Marmo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css',
    '@/assets/css/article.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/global',
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

  loading: '~/components/global/layout/PageLoader.vue',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
	  '@nuxt/postcss8',
    'nuxt-animejs'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  generate: {
    fallback: '404.html'
  }
}
