module.exports = {
  content: ['./src/**/*.{html,ts,jsx,tsx}'],
  mode: 'jit',
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
  purge: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Times New Roman', 'serif'],
    },
    fontSize: {
      '2xl': '28px',
      '3xl': '1.875rem',
      '4xl': '40px',
      '5xl': '3rem',
      '6xl': '64px',
      '7xl': '5rem',
      base: '1rem',
      lg: '1.125rem',
      sm: '.875rem',
      tiny: '.875rem',
      xl: '24px',
      xs: '.75rem',
    },
  },
  variants: {
    extend: {},
  },
};
