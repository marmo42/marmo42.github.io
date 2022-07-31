const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addBase }) {
  const fontFaces = {
    '@font-face': [
      {
        fontFamily: 'Bogart',
        fontStyle: 'normal',
        fontWeight: 500,
        src: 'url("~assets/fonts/Bogart-500.ttf") format("truetype")'
      },
      {
        fontFamily: 'Whitney',
        fontStyle: 'normal',
        fontWeight: 300,
        src: 'url("~assets/fonts/Whitney-300.otf") format("opentype")'
      },
      {
        fontFamily: 'Whitney',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'url("~assets/fonts/Whitney-400.otf") format("opentype")'
      },
      {
        fontFamily: 'Whitney',
        fontStyle: 'normal',
        fontWeight: 500,
        src: 'url("~assets/fonts/Whitney-500.otf") format("opentype")'
      },
      {
        fontFamily: 'Whitney',
        fontStyle: 'normal',
        fontWeight: 600,
        src: 'url("~assets/fonts/Whitney-600.otf") format("opentype")'
      },
      {
        fontFamily: 'Whitney',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'url("~assets/fonts/Whitney-700.otf") format("opentype")'
      }
    ]
  };

  addBase(fontFaces);
}, {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Whitney', 'sans-serif'],
        'serif': ['Bogart', 'sans-serif'],
      }
    }
  }
})
