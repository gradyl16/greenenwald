<template>
  <NuxtLink
    :to="item.to"
    :target="item.target"
    :external="item.external"
    :class="[item.class, 'hover:underline transition duration-300']"
  >
    <span v-if="item.label">{{ item.label }}</span>
    <Icon
      v-if="item.icon"
      :name="item.icon.name"
      :size="item.icon.size"
      :mode="item.icon.mode"
      :class="item.icon.class"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const { item } = defineProps<{ item: NavigationItem }>()
</script>
