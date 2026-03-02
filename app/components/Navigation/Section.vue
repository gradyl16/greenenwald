<template>
  <ProseUl class="flex flex-col sm:flex-row !mb-0">
    <li
      v-for="item in items"
      :key="item.to || item.label"
      class="flex flex-col sm:flex-row"
    >
      <NavigationItem :item="item" />
      <NavigationSubmenu :item="item" />
    </li>
  </ProseUl>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<NavigationItem>;
}>();
</script>

<style lang="css">
ul > li > ul {
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.3s ease;
}

ul > li:hover > ul,
ul > li:focus-within > ul {
  opacity: 1;
}
</style>
