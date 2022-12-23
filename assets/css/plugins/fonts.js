const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addBase }) {
  const fontFaces = {
    '@font-face': [
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 100,
        src: 'url("./assets/fonts/roboto/thin.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 100,
        src: 'url("./assets/fonts/roboto/thin_italic.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        src: 'url("./assets/fonts/roboto/light.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 300,
        src: 'url("./assets/fonts/roboto/light_italic.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'url("./assets/fonts/roboto/regular.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 400,
        src: 'url("./assets/fonts/roboto/regular_italic.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        src: 'url("./assets/fonts/roboto/medium.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 500,
        src: 'url("./assets/fonts/roboto/medium_italic.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'url("./assets/fonts/roboto/bold.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 700,
        src: 'url("./assets/fonts/roboto/bold_italic.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 900,
        src: 'url("./assets/fonts/roboto/black.ttf") format("truetype")'
      },
      {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 900,
        src: 'url("./assets/fonts/roboto/black_italic.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 100,
        src: 'url("./assets/fonts/inter/thin.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 200,
        src: 'url("./assets/fonts/inter/extra_light.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 300,
        src: 'url("./assets/fonts/inter/light.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'url("./assets/fonts/inter/regular.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        src: 'url("./assets/fonts/inter/medium.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        src: 'url("./assets/fonts/inter/semi_bold.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'url("./assets/fonts/inter/bold.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 800,
        src: 'url("./assets/fonts/inter/extra_bold.ttf") format("truetype")'
      },
      {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 900,
        src: 'url("./assets/fonts/inter/black.ttf") format("truetype")'
      },
      {
        fontFamily: 'YouTube Sans',
        fontStyle: 'normal',
        fontWeight: 700,
        src: 'url("./assets/fonts/youtube-sans/bold.otf") format("opentype")'
      },
      {
        fontFamily: 'Lucida Console',
        fontStyle: 'normal',
        fontWeight: 400,
        src: 'url("./assets/fonts/lucida-console/regular.ttf") format("truetype")'
      }
    ]
  };

  addBase(fontFaces);
},
{
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'youtube-sans': ['YouTube Sans', 'sans-serif'],
        'lucida-console': ['Lucida Console', 'sans-serif']
      }
    }
  }
})
