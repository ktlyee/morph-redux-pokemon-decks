const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'vt323': ['"VT323"', 'monospace']
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      }
    },
    colors: {
      transparent: 'transparent',
      yellow: {
        DEFAULT: '#FFCB05',
        light: '#F2E641',
        lighter: '#FEF08A',
        lightest: '#FEF9C3'
      },
      blue: {
        DEFAULT: '#306CB4',
        dark: '#395FAA',
        darkest: '#193469'
      },
      red: {
        DEFAULT: '#F22E2E',
        dark: '#D91A3D'
      },
      white: {
        DEFAULT: '#ffffff',
        smoke: '#f5f5f5'
      },
      gray: colors.coolGray
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
