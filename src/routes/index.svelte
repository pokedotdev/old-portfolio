<svelte:head>
  <title>@pokedotdev</title>
</svelte:head>

<div class="container">
  <section class="my-24">
    <h1 class="bg-text-end text-5xl font-black leading-tight">Hey there.</h1>
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
      <article class="grid grid-cols-2 gap-8">
        <a
          href="https://zonacraft.net"
          target="_blank"
          rel="noopener noreferrer"
          class="group block aspect-[6/4] flex-none cursor-pointer overflow-hidden rounded-lg bg-slate-800 transition-all duration-500 hover:rounded-3xl"
        >
          <img
            class="h-full w-full translate-x-8 translate-y-8 rounded-xl object-cover transition-all duration-500 group-hover:translate-y-5 group-hover:translate-x-5 group-hover:rounded-2xl"
            src="/images/zonacraft.png"
            alt="zonacraft website"
          />
        </a>
        <div class="">
          <h2 class="my-4 text-3xl font-black">ZonaCraft</h2>
          <p class="text-lg leading-relaxed text-gray-600">
            Minecraft website for the Hispanic community. With more than 5
            million visitors per month.
          </p>
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
    <div class="mt-6 grid grid-cols-2 gap-6">
      <a href="https://github.com/pokedotdev/twitter-clone">
        <article
          class="flex flex-col rounded-lg bg-gray-100 py-6 px-6 transition-all hover:rounded-3xl"
        >
          <h2 class="text-lg font-bold">Twitter Clone</h2>
          <p>Made with Remix & CF Workers.</p>
        </article>
      </a>
      <a href="https://github.com/pokedotdev/tokyo-night-insomnia">
        <article
          class="flex flex-col rounded-lg bg-gray-100 py-6 px-6 transition-all hover:rounded-3xl"
        >
          <h2 class="text-lg font-bold">Tokyo Night Insomnia</h2>
          <p>Theme for Insomnia app.</p>
        </article>
      </a>
      <a href="https://github.com/pokedotdev/wp-tailwind">
        <article
          class="flex flex-col rounded-lg bg-gray-100 py-6 px-6 transition-all hover:rounded-3xl"
        >
          <h2 class="text-lg font-bold">WP Tailwind</h2>
          <p>WordPress template with TailwindCSS.</p>
        </article>
      </a>
    </div>
  </section>
</div>
