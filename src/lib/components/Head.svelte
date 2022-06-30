<svelte:head>
	<script>
		let themeColor = '#fff'
		const theme = localStorage.theme
		const isColorSchemeDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		if (theme === 'dark' || (!theme && isColorSchemeDark)) {
			document.documentElement.classList.add('dark')
			themeColor = '#0f172a'
		}
		document.head.insertAdjacentHTML(
			'beforeend',
			`<meta name="theme-color" content="${themeColor}">`
		)
	</script>
</svelte:head>
