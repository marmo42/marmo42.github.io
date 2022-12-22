/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('./assets/css/plugins/colors'),
    require('./assets/css/plugins/fonts'),
    require('./assets/css/plugins/typography')
  ]
}
