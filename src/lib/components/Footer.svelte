<script lang="ts">
  const socialLinks = [
    {
      href: 'https://github.com/pokedotdev',
      icon: 'i-simple-icons:github',
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com/pokedotdev',
      icon: 'i-simple-icons:twitter',
      label: 'Twitter',
    },
  ]
</script>

<footer class="container my-8 flex items-center justify-between">
  <span class="text-2xl font-bold">The End.</span>
  <ul class="flex gap-6">
    {#each socialLinks as social}
      <li class="flex items-center">
        <a
          href={social.href}
          class="text-xl text-gray-400 hover:scale-110 hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to {social.label} profile"
        >
          <div class={social.icon} />
        </a>
      </li>
    {/each}
  </ul>
</footer>
