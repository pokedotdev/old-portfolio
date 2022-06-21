const theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
     fontFamily: {
        sans: ["InterVariable", ...theme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    container: false,
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
};

module.exports = config;
