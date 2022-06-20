<script lang="ts">
  import { Avatar } from '.'
  import { page } from '$app/stores'

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
</script>

<header class="justify-betwee container flex h-24 items-center">
  <nav class="flex items-center gap-8">
    <a href="/">
      <Avatar />
    </a>
    <ul class="flex gap-4">
      {#each menu as item}
        <li>
          <a
            href={item.href}
            class="block rounded-full py-3 px-4 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
            class:text-black={$page.url.pathname === item.href}
          >
            {item.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
