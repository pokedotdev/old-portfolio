<script lang="ts">
	const openSourceProjects = [
		{
			title: 'Twitter Clone',
			description: 'Made with Remix & EdgeDB.',
			href: 'https://github.com/pokedotdev/twitter-clone',
			tools: [
				'i-logos:remix-icon dark:invert',
				'i-logos:unocss dark:invert',
				'i-logos:fly',
				'i-logos:docker-icon',
			],
		},
		{
			title: 'Tokyo Night Insomnia',
			description: 'Theme for Insomnia app.',
			href: 'https://github.com/pokedotdev/tokyo-night-insomnia',
			tools: ['i-logos:npm-icon', 'i-logos:insomnia'],
		},
		{
			title: 'WP Tailwind',
			description: 'WordPress template with Tailwind.',
			href: 'https://github.com/pokedotdev/wp-tailwind',
			tools: [
				'i-logos:wordpress-icon dark:invert',
				'i-logos:webpack',
				'i-logos:tailwindcss-icon',
			],
		},
		{
			title: 'Portfolio',
			description: 'My bit of internet.',
			href: 'https://github.com/pokedotdev/poke.dev',
			tools: [
				'i-logos:svelte-icon',
				'i-logos:unocss dark:invert',
				'i-logos:tailwindcss-icon',
			],
		},
	]
</script>

<svelte:head>
	<title>@pokedotdev</title>
</svelte:head>

<div class="container">
	<section class="mb-24 mt-16">
		<span class="text-gradient font-display text-5xl font-bold leading-tight">
			Hey there.
		</span>
		<hr class="w-32 border-t-2 border-dotted" />
		<p class="text-gray text-xl leading-normal">
			My name is Arturo, aka Poke. I'm a Full Stack JavaScript Developer. I like
			to develop websites with amazing tools.
		</p>
	</section>

	<section>
		<header class="text-lg font-bold">
			<h2 class="text-xl">Projects</h2>
		</header>
		<div class="mt-6">
			<article class="grid gap-7 md:grid-cols-2">
				<a
					href="https://zonacraft.net"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative block aspect-[6/4] flex-none cursor-pointer overflow-hidden rounded-lg bg-indigo-300 will-change-transform dark:bg-indigo-500"
					aria-label="Go to ZonaCraft website"
				>
					<div
						class="absolute inset-0 -z-10 scale-105 bg-cover opacity-30 blur-0 saturate-150 transition duration-500 group-hover:blur-sm"
						style="background-image: url('/images/minecraft-bg.webp'); transition-property: filter;"
					/>
					<div
						class="mt-8 ml-8 h-full w-full rounded-lg transition duration-500 group-hover:-translate-y-3 group-hover:-translate-x-3 group-hover:rounded-2xl"
						style="background-image: url('/images/zonacraft-preview.webp'); background-size: 100% auto; transition-property: transform, border-radius;"
					/>
				</a>
				<div class="flex flex-col justify-center">
					<h2 class="text-gradient mb-2 font-display text-2xl font-bold">
						ZonaCraft
					</h2>
					<p class="text-gray text-lg leading-relaxed">
						Minecraft website for the Hispanic community. With more than 5
						million visitors per month.
					</p>
					<div>
						<a
							href="https://zonacraft.net"
							target="_blank"
							rel="noopener noreferrer"
							class="group mt-4 inline-flex h-11 items-center gap-3 rounded-lg bg-gray-900 bg-gradient-to-b from-gray-800 px-4 text-lg font-bold text-white transition hover:gap-4 dark:bg-indigo-100 dark:from-gray-100 dark:text-black"
							style="transition-property: gap;"
						>
							See it
							<div class="i-carbon:arrow-right" />
						</a>
					</div>
				</div>
			</article>
		</div>
	</section>

	<section class="my-16">
		<header class="text-lg font-bold">
			<div class="flex items-center gap-2">
				<h2 class="text-xl">Open Source</h2>
				<div class="i-ph:heart-fill scale-110 text-rose-500" />
			</div>
		</header>
		<div class="mt-6 grid gap-7 md:grid-cols-2">
			{#each openSourceProjects as project}
				<a href={project.href} target="_blank" rel="noopener noreferrer">
					<article
						class="flex flex-col rounded-lg bg-gray-100 py-6 px-8 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
					>
						<h2 class="text-lg font-bold">{project.title}</h2>
						<p>
							{project.description}
						</p>
						<ul class="mt-2 flex gap-2">
							{#each project.tools as icon}
								<li class={icon} />
							{/each}
						</ul>
					</article>
				</a>
			{/each}
		</div>
	</section>
</div>
