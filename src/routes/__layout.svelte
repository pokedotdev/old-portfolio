<script lang="ts">
	import '../app.css'
	import '@fontsource/inter/variable.css'
	import '$lib/assets/fonts/recoleta/index.css'
	import 'uno.css'
	import { Header, Footer } from '$lib/components'
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
