const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      mobile: '360px',
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        cards: 'repeat(auto-fill, minmax(240px, 1fr))',
      },
    },
  },
};
