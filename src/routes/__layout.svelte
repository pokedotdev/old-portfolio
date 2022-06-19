<script lang="ts">
  import '../app.css'
  import '@fontsource/inter/variable.css'
  import { Header, Footer } from '$lib/components'
</script>

<div class="bg-black text-center text-white">website under development</div>

<Header />

<main>
  <slot />
</main>

<Footer />
