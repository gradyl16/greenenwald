<template>
  <PageWrapper>
    <ProseMain>
      <NavigationMenu
        :interItems="menuItems.interItems"
        :intraItems="undefined"
      />
      <slot />
    </ProseMain>
    <PageFooter />
  </PageWrapper>
</template>

<script setup lang="ts">
const { menuItems } = useMenu();
</script>
