<template>
  <footer class="bg-dark bottom-0">
    <nav class="grid grid-flow-col gap-4 justify-center p-4">
      <CustomLink
        v-for="item in internalLinks"
        :key="item.to"
        :item="item"
        :class="route.path === item.to ? 'text-purple' : 'text-light-gray'"
      />
    </nav>

    <nav class="flex justify-center gap-4 p-4">
      <CustomLink v-for="item in externalLinks" :key="item.to" :item="item" />
    </nav>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute();

const internalLinks: NavigationItem[] = [
  { label: "Home", to: "/", class: "hover:text-white" },
  { label: "Blog", to: "/blog", class: "hover:text-white" },
];
const externalLinks: NavigationItem[] = [
  {
    to: "https://github.com/gradyl16",
    target: "_blank",
    external: true,
    icon: {
      name: "uil:github",
      size: "3em",
      mode: "svg",
      class: "text-pink hover:text-red transition-colors duration-300",
    },
  },
  {
    to: "https://www.linkedin.com/in/dylen-greenenwald-a677441a1",
    target: "_blank",
    external: true,
    icon: {
      name: "uil:linkedin",
      size: "3em",
      mode: "svg",
      class: "text-green hover:text-cyan transition-colors duration-300",
    },
  },
];
</script>
