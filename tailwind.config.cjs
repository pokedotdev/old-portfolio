const theme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,.styles.ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', ...theme.fontFamily.sans],
				display: ['Recoleta', 'InterVariable', ...theme.fontFamily.sans],
			},
			colors: {
				gray: colors.slate,
			},
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [require('@tailwindcss/typography')],
}

module.exports = config
