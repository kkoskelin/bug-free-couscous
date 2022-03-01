const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false,
  plugins: [],
  purge: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        accent: colors.green,
        primary: colors.gray,
        secondary: colors.indigo,
      },
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Helvetica', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
};
