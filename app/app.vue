<script setup lang="ts">
useSeoMeta({
  title: "Dylen Greenenwald",
  ogTitle: "Dylen Greenenwald",
  description:
    "Explorer. Security researcher. Juggler. Come find out what else I am at my personal website.",
  ogDescription:
    "Explorer. Security researcher. Juggler. Come find out what else I am at my personal website.",
  ogImage: "https://greenenwald.com/portrait.jpg",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
