<template>
  <NuxtLink
    :external="item.external ? true : false"
    :to="item.to"
    :target="item.target"
    class="flex items-center gap-2 p-2 mx-2 rounded-xl text-light-gray hover:text-white transition-all duration-300"
  >
    <Icon :name="item.icon" class="w-5 h-5" />
    <span>{{ item.label }}</span>
  </NuxtLink>
  <NavigationSubmenu :item="item" />
</template>

<script setup lang="ts">
defineProps<{ item: NavigationItem }>();
</script>
