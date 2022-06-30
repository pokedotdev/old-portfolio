<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ error, status }) => {
    return {
      props: { error, status },
    }
  }
</script>

<script lang="ts">
  import { dev } from '$app/env'
  export let error: Error, status: number
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="container flex flex-col items-center">
  <h1 class="my-8 font-display text-9xl font-bold">{status}</h1>
  {#if dev && error.stack}
    <pre class="w-full overflow-y-auto border">{error.stack}</pre>
  {/if}
</div>
