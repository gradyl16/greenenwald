<template>
  <PageWrapper>
    <ProseMain>
      <PageBanner id="top" />
      <NavigationMenu
        :intra-items="menuItems.intraItems"
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
