<script lang="ts">
  import { ButtonTheme } from '.'
  import { page } from '$app/stores'
  import { browser } from '$app/env'

  const menu = [
    {
      href: '/',
      text: 'Home',
    },
    {
      href: '/about',
      text: 'About',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ]

  let isMenuOpen = false

  const toggleMenu = () => {
    if (!browser) return
    isMenuOpen = !isMenuOpen
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden', 'sm:overflow-auto')
      window.scrollTo(0, 0)
    } else {
      document.body.classList.remove('overflow-hidden', 'sm:overflow-auto')
    }
  }
</script>

<button
  on:click={toggleMenu}
  class="z-20 grid h-10 w-10 place-items-center rounded-lg bg-gray-100 dark:bg-gray-800 sm:hidden"
>
  <div class={isMenuOpen ? 'i-ph:x-fill' : 'i-ph:list'} />
</button>

<div
  class="menu fixed inset-0 z-10 flex h-screen flex-auto flex-col items-center gap-4 overflow-hidden bg-black transition duration-300 sm:static sm:h-auto sm:flex-row sm:justify-between sm:overflow-auto sm:bg-transparent"
  class:menu-close={!isMenuOpen}
  style="transition-property: height;"
>
  <nav
    class="mt-24 flex items-center text-white transition duration-500 sm:mt-0 sm:text-inherit"
    style="transition-property: opacity;"
  >
    <ul class="flex flex-auto flex-col items-center gap-4 sm:flex-row">
      {#each menu as item}
        <li>
          <a
            on:click={toggleMenu}
            href={item.href}
            class="{$page.url.pathname === item.href
              ? 'text-inherit'
              : 'sm:text-gray text-gray-500 hover:text-inherit'} block rounded-full py-3 px-4 font-display text-3xl font-bold transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 sm:font-sans sm:text-base sm:font-normal"
          >
            {item.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <hr
    class="w-36 flex-none border-t-2 border-dotted !border-gray-800 sm:hidden"
  />
  <ButtonTheme />
</div>

<style>
  @media only screen and (max-width: 640px) {
    .menu nav a:hover {
      background-color: unset;
    }
    .menu-close {
      height: 0vh;
    }
    .menu-close nav {
      opacity: 0;
    }
  }
</style>
