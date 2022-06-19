const theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container: false,
    fontFamily: {
      ...theme.fontFamily,
      sans: ["InterVariable", ...theme.fontFamily.sans],
    },
    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
};

module.exports = config;
