/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container: false,
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {},
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
};

module.exports = config;
