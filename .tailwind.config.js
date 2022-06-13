const defaultTheme = require('tailwindcss/defaultTheme');
const theme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      `components/**/*.{tsx,ts}`,
      `pages/**/*.tsx`,
      `next.config.{js,ts}`,
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto', ...theme.fontFamily.sans],
        heading: ['Raleway', ...theme.fontFamily.sans],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '980px',
        xl: '980px',
        '2xl': '980px',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      typography: {
        '3xl': {
          css: {
            fontSize: '1.875rem',
            h1: {
              fontSize: '4rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
