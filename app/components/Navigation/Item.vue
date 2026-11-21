<template>
  <NuxtLink
    :external="item.external"
    :to="item.to"
    :target="item.target"
    class="flex items-center gap-2 p-2 mx-2 rounded-xl text-light-gray hover:text-white transition-all duration-300"
  >
    <Icon v-if="item.icon" :name="item.icon" class="w-5 h-5" />
    <span>{{ item.label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { MenuItem } from "~/types/NavigationItem";

defineProps<{ item: MenuItem }>();
</script>
