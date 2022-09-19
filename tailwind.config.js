module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx}',
    './src/sections/**/*.{html,js,jsx}',
    './src/App.{html,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
