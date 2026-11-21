<template>
  <ul class="flex flex-col sm:flex-row">
    <li v-for="item in items" :key="item.to">
      <NavigationItem :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  items: NavigationItem[];
}>();
</script>
