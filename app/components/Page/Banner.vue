<template>
  <Container class="mt-2 text-center">
    <ProseH1
      class="transition-all duration-300 ease-in-out"
      :style="{
        opacity: fading ? 0 : 1,
        filter: fading ? 'blur(1rem)' : 'blur(0)',
      }"
    >
      {{ currentContent.headline }}
    </ProseH1>

    <p
      class="!text-orange mt-2 transition-all duration-300 ease-in-out"
      :style="{
        opacity: fading ? 0 : 1,
        filter: fading ? 'blur(1rem)' : 'blur(0)',
      }"
    >
      {{ currentContent.tagline }}
    </p>
  </Container>
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

watch(
  () => targetContent.value,
  (newContent) => {
    fading.value = true;
    setTimeout(() => {
      Object.assign(currentContent, newContent);
      fading.value = false;
    }, 300);
  },
);
</script>
