<template>
  <footer class="w-full bg-dark-gray text-white">
    <nav class="grid grid-flow-col gap-4 justify-center p-4 text-pink">
      <NuxtLink to="#about" class="hover:underline">About</NuxtLink>
      <NuxtLink to="#news" class="hover:underline">News</NuxtLink>
      <NuxtLink to="#publications" class="hover:underline">Publications</NuxtLink>
    </nav>
    <nav class="flex justify-center gap-4 p-4">
      <NuxtLink to="https://github.com/gradyl16" target="_blank">
        <Icon name="uil:github" size="3em" mode="svg" class="text-purple hover:text-red" />
      </NuxtLink>
      <NuxtLink to="https://www.linkedin.com/in/dylen-greenenwald-a677441a1" target="_blank">
        <Icon name="uil:linkedin" size="3em" class="text-cyan hover:text-yellow" />
      </NuxtLink>
    </nav>
  </footer>
</template>
