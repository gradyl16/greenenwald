<template>
  <ProseSection>
    <Container v-if="page">
      <ContentRenderer :value="page" />
    </Container>
    <Container v-else class="flex justify-center">
      <ProseH2>Page Not Found</ProseH2>
      <ProseP>Oops! The content you're looking for doesn't exist.</ProseP>
      <CustomLink
        :item="{
          label: 'Back to Blog',
          to: '/blog',
          class:
            '!no-underline inline-block p-3 mt-2 font-semibold text-cyan/70 bg-light/50 rounded-xl outline outline-light hover:outline-lighter hover:text-purple transition-all duration-300',
        }"
      />
    </Container>
  </ProseSection>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "post",
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>
