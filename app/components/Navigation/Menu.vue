<template>
  <Container class="!p-2 mt-2">
    <nav>
      <ProseUl
        :class="[
          'flex flex-col sm:flex-row mx-4 !mb-0 transition-all duration-400 ease-in-out',
          fading ? 'opacity-0 blur-lg' : 'opacity-100 blur-0',
          intraItems ? 'justify-between' : 'justify-center',
        ]"
        :key="route.fullPath"
      >
        <NavigationSection v-if="intraItems" :items="intraItems" />
        <NavigationSection :items="interItems" />
      </ProseUl>
    </nav>
  </Container>
</template>

<script setup lang="ts">
const props = defineProps<{
  intraItems?: Array<NavigationItem>;
  interItems: Array<NavigationItem>;
}>();

const route = useRoute();
const fading = ref(false);

watch(
  () => route.fullPath,
  () => {
    fading.value = true;
    setTimeout(() => (fading.value = false), 300);
  },
);
</script>
