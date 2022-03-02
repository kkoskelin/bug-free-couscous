const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts,jsx,tsx}'],
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
