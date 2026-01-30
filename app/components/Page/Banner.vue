<template>
  <div class="flex flex-col mt-2">
    <Transition name="fade" mode="out-in">
      <UContainer :key="route.path">
        <h1 class="text-center">
          {{ content.headline }}
        </h1>
        <p class="text-center !text-orange mt-2">
          {{ content.tagline }}
        </p>
      </UContainer>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const content = computed(() =>
  route.path.startsWith("/blog")
    ? {
        headline: "Mental Overflow",
        tagline: "A hacker's blog.",
      }
    : {
        headline: "Dylen Greenenwald",
        tagline: "dgree21 [at] illinois [dot] edu",
      },
);
</script>
