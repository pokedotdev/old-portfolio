import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import UnoCSS from 'unocss/vite'
import { presetIcons, extractorSvelte } from 'unocss'
import TailwindCSS from 'tailwindcss'
import tailwindConfig from './tailwind.config.cjs'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [
				UnoCSS({
					mode: 'svelte-scoped',
					extractors: [extractorSvelte],
					presets: [presetIcons({ scale: 1.2 })],
				}),
			],
			css: {
				postcss: {
					plugins: [TailwindCSS(tailwindConfig)],
				},
			},
		},
	},
}

export default config
