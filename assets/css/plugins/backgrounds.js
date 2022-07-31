const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities }) {
  addUtilities({
    '.blurry-background': {
      'backdrop-filter': 'blur(80px)'
    },
    
    '.rainbow-background': {
      'background': 'linear-gradient(271deg, #a0e9ff 30%, #a162e8 50%, #f093b0 70%, #edca85 94%)'
    }
  })
})
