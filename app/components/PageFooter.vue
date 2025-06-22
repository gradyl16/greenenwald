<template>
  <footer class="w-full bg-dark-gray text-white">
    <nav class="grid grid-flow-col gap-4 justify-center p-4">
      <ULink
        to="/"
        >Home</ULink
      >
      <ULink
        to="/blog"
        :class="isBlog ? 'text-purple' : ''"
        >Blog</ULink
      >
    </nav>
    <nav class="flex justify-center gap-4 p-4">
      <ULink to="https://github.com/gradyl16" target="_blank">
        <Icon
          name="uil:github"
          size="3em"
          mode="svg"
          class="text-pink hover:text-red transition-colors duration-300"
        />
      </ULink>
      <ULink
        to="https://www.linkedin.com/in/dylen-greenenwald-a677441a1"
        target="_blank"
      >
        <Icon
          name="uil:linkedin"
          size="3em"
          class="text-green hover:text-yellow transition-colors duration-300"
        />
      </ULink>
    </nav>
  </footer>
</template>

<script setup>
const route = useRoute()
const isBlog = computed(() => route.path.startsWith("/blog")) 
</script>
