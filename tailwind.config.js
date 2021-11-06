module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '9/20': '45%',
      },
      colors: {
        primary: '#0D5F9A',
        secondary: '#858585',
        background: '#f5f5f5',
        link: '#346BD5',
        field: '#EAEAEA',
        icon: '#999999',
        'light-grey': '#B0B0B0',
        'light-red': '#E9A0A0',
        'light-green': '#9BDD7C',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      margin: {
        13: '3.25rem',
        15: '3.75rem',
      },
      padding: {
        13: '3.25rem',
        15: '3.75rem',
      },
      borderRadius: {
        '4xl': '1.875rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};