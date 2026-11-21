<template>
  <PageWrapper>
    <ProseMain>
      <NavigationMenu
        :inter-items="menuItems.interItems"
      />
      <slot />
    </ProseMain>
    <PageFooter />
  </PageWrapper>
</template>

<script setup lang="ts">
const { menuItems } = useMenu();
</script>
