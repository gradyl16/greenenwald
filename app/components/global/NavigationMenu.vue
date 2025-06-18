<script setup lang="ts">
const items = ref([
  { label: 'About', to: '#about', icon: 'uil:user' },
  { label: 'News', to: '#news', icon: 'uil:newspaper' },
  { label: 'Publications', to: '#publications', icon: 'uil:book-open' },
  { label: 'CV', to: '/GreenenwaldCV2025.pdf', icon: 'uil:file-alt', external: true }
])
</script>

<template>
  <UNavigationMenu
    :items="items"
    class="w-full sm:px-0 flex flex-wrap justify-center mx-auto rounded-3xl bg-dark-gray overflow-x-auto"
    variant="link"
  >
    <template #item="{ item, props }">
      <ULink
        v-bind="props"
        :to="item.to"
        :target="item.external ? '_blank' : undefined"
        class="flex items-center gap-2 px-4 py-2 rounded-xl font-lg text-dark-blue hover:bg-dark-blue"
      >
        <Icon v-if="item.icon" :name="item.icon" class="text-gray w-5 h-5" />
        {{ item.label }}
      </ULink>
    </template>
  </UNavigationMenu>
</template>
