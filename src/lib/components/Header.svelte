<script lang="ts">
  import { Avatar } from '.'

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
          <a href={item.href} class="rounded-full py-3 px-4 hover:bg-gray-100">
            {item.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
