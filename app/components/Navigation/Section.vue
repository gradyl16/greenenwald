<template>
  <ul class="flex flex-col sm:flex-row">
    <li v-for="item in items" :key="item.to">
      <NavigationItem :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { MenuItem } from "~/types/NavigationItem";

defineProps<{
  items: MenuItem[];
}>();
</script>
