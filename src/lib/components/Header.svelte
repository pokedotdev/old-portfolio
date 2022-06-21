<script lang="ts">
  import { Avatar, ButtonTheme } from '.'
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

<header class="container flex h-24 items-center justify-between gap-8">
  <a href="/">
    <Avatar />
  </a>
  <div class="flex flex-auto items-center justify-between">
    <nav class="flex items-center">
      <ul class="flex gap-4">
        {#each menu as item}
          <li>
            <a
              href={item.href}
              class="{$page.url.pathname === item.href
                ? 'text-inherit'
                : 'text-gray hover:text-inherit'} block rounded-full py-3 px-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {item.text}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <ButtonTheme />
  </div>
</header>
