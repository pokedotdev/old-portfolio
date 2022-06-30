<script lang="ts">
	import '../app.css'
	import '@fontsource/inter/variable.css'
	import '$lib/assets/fonts/recoleta/index.css'
	import { Header, Footer, Head } from '$lib/components'
</script>

<Head />

<Header />

<main>
	<slot />
</main>

<Footer />
