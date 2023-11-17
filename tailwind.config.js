module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      opacity: {
        4: '.04',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
