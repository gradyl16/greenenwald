<template>
  <NuxtLink
    :href="href"
    :target="isExternal ? '_blank' : target"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="text-purple hover:underline"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  href?: string;
  target?: string;
}>();

// Only off-site links open in a new tab; #anchors and internal pages stay put.
const isExternal = computed(() => /^(https?:)?\/\//.test(props.href ?? ""));
</script>
