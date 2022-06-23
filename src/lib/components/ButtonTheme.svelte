<script lang="ts">
  import { browser } from '$app/env'

  let isDark = browser && document.documentElement.classList.contains('dark')

  const toggleDarkMode = () => {
    if (!browser) return
    isDark = !isDark
    document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark ? 'dark' : 'light'
  }
</script>

<button
  on:click={toggleDarkMode}
  class="mx-auto flex h-10 flex-none items-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 sm:m-0"
  aria-label="Activate {isDark ? 'light' : 'dark'} mode"
  title="Activate {isDark ? 'light' : 'dark'} mode"
>
  <div class="flex w-10 justify-center">
    <div class="i-ph:moon-fill hidden dark:block" />
    <div class="i-ph:sun-fill dark:hidden" />
  </div>
  <span class="pr-4 sm:hidden">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
</button>
