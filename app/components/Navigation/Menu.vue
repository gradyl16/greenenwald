<template>
  <BaseContainer class="!p-2 mt-2">
    <nav
      :class="[
        'flex flex-col sm:flex-row mx-4 transition-all duration-300 ease-in-out',
        fading ? 'opacity-0 blur-lg' : 'opacity-100 blur-0',
        intraItems ? 'justify-between' : 'justify-center',
      ]"
    >
      <NavigationSection v-if="intraItems" :items="intraItems" />
      <NavigationSection :items="interItems" />
    </nav>
  </BaseContainer>
</template>

<script setup lang="ts">
import type { MenuItem } from "~/types/NavigationItem";

defineProps<{
  intraItems?: MenuItem[];
  interItems: MenuItem[];
}>();

const route = useRoute();
const fading = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

// Only animate when the page changes, not when jumping between #anchors.
watch(
  () => route.path,
  () => {
    clearTimeout(timer);
    fading.value = true;
    timer = setTimeout(() => (fading.value = false), 300);
  },
);

onBeforeUnmount(() => clearTimeout(timer));
</script>
