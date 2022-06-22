<script lang="ts">
  import { ButtonTheme } from '.'
  import { page } from '$app/stores'
  import { browser } from '$app/env'
  import { slide } from 'svelte/transition'

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
  class="menu fixed inset-0 z-10 flex flex-auto flex-col items-center gap-4 bg-black sm:static sm:flex-row sm:justify-between sm:bg-transparent"
  class:menu-close={!isMenuOpen}
>
  <nav class="flex items-center text-white sm:text-inherit">
    <ul class="flex flex-auto flex-col items-center gap-4 sm:flex-row">
      {#each menu as item}
        <li>
          <a
            on:click={toggleMenu}
            href={item.href}
            class="{$page.url.pathname === item.href
              ? 'text-inherit'
              : 'sm:text-gray text-gray-500 hover:text-inherit'} block rounded-full py-3 px-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {item.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <hr class="w-36 !bg-gray-800 sm:hidden" />
  <ButtonTheme />
</div>

<style>
  @media only screen and (max-width: 640px) {
    .menu {
      height: 100%;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      transition-property: height;
    }
    .menu nav {
      margin-top: 6rem;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    .menu nav a {
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: 900;
    }
    .menu nav a:hover {
      background-color: unset;
    }
    .menu-close {
      height: 0%;
    }
    .menu-close nav {
      opacity: 0;
    }
  }
</style>
