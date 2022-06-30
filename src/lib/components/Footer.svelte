<script lang="ts">
	const socialLinks = [
		{
			href: 'https://twitter.com/pokedotdev',
			icon: 'i-logos:twitter',
			label: 'Twitter',
		},
		{
			href: 'https://github.com/pokedotdev',
			icon: 'i-logos:github-icon dark:invert',
			label: 'GitHub',
		},
	]
</script>

<footer class="container my-8 flex items-center justify-between">
	<span class="text-gradient font-display text-2xl font-bold">The End.</span>
	<ul class="flex gap-6">
		{#each socialLinks as social}
			<li class="flex items-center">
				<a
					href={social.href}
					class="text-xl transition-transform hover:scale-110"
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
