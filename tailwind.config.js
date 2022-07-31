/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  plugins: [
    require('./assets/css/plugins/colors'),
    require('./assets/css/plugins/colors/text_colors'),
    require('./assets/css/plugins/colors/icon_colors'),
    require('./assets/css/plugins/fonts'),
    require('./assets/css/plugins/typography'),
    require('./assets/css/plugins/backgrounds'),
    require('./assets/css/plugins/shadows')
  ]
}
