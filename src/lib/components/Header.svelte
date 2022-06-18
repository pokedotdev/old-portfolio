<script lang="ts">
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
      <img
        class="avatar h-12 w-12 rounded-full border-4 border-white"
        src="https://pbs.twimg.com/profile_images/1532944252820279296/hkAH2wig_400x400.jpg"
        alt="avatar"
      />
    </a>
    <ul class="flex gap-4">
      {#each menu as item}
        <li>
          <a
            href={item.href}
            class="font-mono rounded-full py-3 px-4 hover:bg-gray-100"
          >
            {item.text}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .avatar {
    box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.1);
  }
</style>
