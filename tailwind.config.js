module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      yellow: {
        DEFAULT: '#FFCB05',
        light: '#F2E641'
      },
      blue : {
        DEFAULT: '#306CB4',
        dark: '#395FAA',
        darkest: '#193469' 
      },
      red : {
        DEFAULT: '#F22E2E',
        dark: '#D91A3D'
      }
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
  variants: {
    extend: {},
  },
  plugins: [],
}
