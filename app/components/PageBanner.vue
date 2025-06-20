<script setup lang="ts">
const route = useRoute();

const content = computed(() => {
  if (route.path.startsWith("/blog")) {
    return {
      headline: "Mental Overflow",
      tagline: "A hacker's blog.",
    };
  }

  return {
    headline: "Dylen Greenenwald",
    tagline: "dgree21 [at] illinois [dot] edu",
  };
});
</script>

<template>
  <div class="flex flex-col mt-2">
    <div class="rounded-3xl bg-dark-gray p-8 overflow-x-hidden">
      <Transition name="fade" mode="out-in">
        <h1 :key="content.headline" class="text-center">
          {{ content.headline }}
        </h1>
      </Transition>
      <Transition name="fade" mode="out-in">
        <p :key="content.tagline" class="text-center !text-orange mt-2">
          {{ content.tagline }}
        </p>
      </Transition>
    </div>
  </div>
</template>
