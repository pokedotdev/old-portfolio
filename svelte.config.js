import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import UnoCSS from 'unocss/vite'
import { presetIcons, extractorSvelte } from 'unocss'
import tailwind from 'tailwindcss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [
				UnoCSS({
          include: [/\.svelte$/, /\.md?$/, /\.ts$/],
					extractors: [extractorSvelte],
					presets: [presetIcons({ scale: 1.2 })],
				}),
			],
			css: {
				postcss: {
					plugins: [tailwind, autoprefixer],
				},
			},
		},
	},
}

export default config
