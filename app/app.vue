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

const hydrated = ref(false);

onMounted(() => {
  hydrated.value = true;
});
</script>

<template>
  <Transition name="fade" appear>
    <div v-show="hydrated" class="transition-opacity duration-500">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>
