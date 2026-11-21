<template>
  <BaseContainer class="mt-2 text-center">
    <ProseH1 class="transition-all duration-300 ease-in-out" :style="fadeStyle">
      {{ currentContent.headline }}
    </ProseH1>

    <p
      class="!text-orange mt-2 transition-all duration-300 ease-in-out"
      :style="fadeStyle"
    >
      {{ currentContent.tagline }}
    </p>
  </BaseContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const targetContent = computed(() =>
  route.path.startsWith("/blog")
    ? { headline: "Mental Overflow", tagline: "A hacker's blog" }
    : {
        headline: "Dylen Greenenwald",
        tagline: "dgree21 [at] illinois [dot] edu",
      },
);
const currentContent = reactive({ ...targetContent.value });
const fading = ref(false);
const fadeStyle = computed(() => ({
  opacity: fading.value ? 0 : 1,
  filter: fading.value ? "blur(1rem)" : "blur(0)",
}));
let timer: ReturnType<typeof setTimeout> | undefined;

// Fade out, swap the text, fade back in. Clearing the pending timer means
// rapid navigation always settles on the latest route's content.
watch(targetContent, (newContent) => {
  clearTimeout(timer);
  fading.value = true;
  timer = setTimeout(() => {
    Object.assign(currentContent, newContent);
    fading.value = false;
  }, 300);
});

onBeforeUnmount(() => clearTimeout(timer));
</script>
