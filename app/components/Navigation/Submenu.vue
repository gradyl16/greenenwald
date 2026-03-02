<template>
  <ul
    v-if="item.children?.length"
    class="ml-6 mt-2 flex flex-col gap-1 max-h-0 opacity-0 overflow-hidden"
  >
    <li v-for="child in item.children" :key="child.to || child.label">
      <NuxtLink
        :to="child.to"
        :external="child.external ? true : undefined"
        class="flex items-center gap-2 p-2 mx-2 text-light-gray hover:bg-pink/30 rounded-xl"
      >
        <Icon v-if="child.icon" :name="child.icon" class="w-4 h-4" />
        <span>{{ child.label }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ item: NavigationItem }>();
</script>
