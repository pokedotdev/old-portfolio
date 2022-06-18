<script lang="ts">
  const openSourceProjects = [
    {
      title: 'Twitter Clone',
      description: 'Made with Remix & CF Workers',
      href: 'https://github.com/pokedotdev/twitter-clone',
    },
    {
      title: 'Tokyo Night Insomnia',
      description: 'Theme for Insomnia app.',
      href: 'https://github.com/pokedotdev/tokyo-night-insomnia',
    },
    {
      title: 'WP Tailwind',
      description: 'WordPress template with TailwindCSS.',
      href: 'https://poke.dev/pokedotdev/wp-tailwind',
    },
  ]
</script>

<svelte:head>
  <title>@pokedotdev</title>
</svelte:head>

<div class="container">
  <section class="mb-24 mt-16">
    <h1 class="text-5xl font-black leading-tight">Hey there.</h1>
    <!-- Write a personal description -->
    <hr class="my-4 w-32" />
    <p class="text-2xl leading-normal text-gray-600">
      My name is Arturo, aka Poke. I'm a Full Stack JavaScript Developer. I like
      to develop websites with amazing tools.
    </p>
  </section>

  <section>
    <header class="text-lg font-bold">
      <h3>Projects</h3>
    </header>
    <div class="mt-6">
      <article class="grid gap-8 lg:grid-cols-2">
        <a
          href="https://zonacraft.net"
          target="_blank"
          rel="noopener noreferrer"
          class="group block aspect-[6/4] flex-none cursor-pointer overflow-hidden rounded-lg bg-slate-500 transition-all  duration-500 hover:rounded-3xl"
        >
          <div
            class="h-full w-full translate-x-8 translate-y-8 rounded-lg transition-all duration-500 group-hover:translate-y-5 group-hover:translate-x-5 group-hover:rounded-2xl"
            style="background-image: url('/images/zonacraft-preview.png'); background-size: 100% auto;"
          />
        </a>
        <div class="flex flex-col justify-center">
          <h2 class="mb-4 text-3xl font-black">ZonaCraft</h2>
          <p class="text-lg leading-relaxed text-gray-600">
            Minecraft website for the Hispanic community. With more than 5
            million visitors per month.
          </p>
          <div>
            <a
              href="https://zonacraft.net"
              target="_blank"
              rel="noopener noreferrer"
              class="group mt-4 inline-flex items-center gap-3 rounded-lg bg-black py-2 px-4 text-lg font-bold text-white transition-all hover:gap-4"
            >
              See it
              <div
                class="i-carbon:arrow-right transition-transform group-hover:-rotate-45"
              />
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="my-16">
    <header class="text-lg font-bold">
      <div class="flex items-center gap-2">
        <h3>Open Source</h3>
        <div class="i-ph:heart-fill scale-110 text-rose-500" />
      </div>
    </header>
    <div class="mt-6 grid gap-6 md:grid-cols-2">
      {#each openSourceProjects as project}
        <a href={project.href} target="_blank" rel="noopener noreferrer">
          <article
            class="flex flex-col rounded-lg bg-gray-100 py-6 px-6 transition-all hover:rounded-3xl"
          >
            <h2 class="text-lg font-bold">{project.title}</h2>
            <p>{project.description}</p>
          </article>
        </a>
      {/each}
    </div>
  </section>
</div>
