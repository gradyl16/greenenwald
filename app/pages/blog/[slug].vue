<template>
  <section>
    <UContainer v-if="page">
      <ContentRenderer :value="page" />
    </UContainer>
    <UContainer v-else>
      <h2>Page Not Found</h2>
      <p class="mb-4">Oops! The content you're looking for doesn't exist.</p>
      <ULink
        to="/blog"
        class="inline-block p-3 mt-2 font-semibold text-white/70 bg-dark-blue/50 rounded-lg outline outline-white hover:outline-purple hover:no-underline hover:bg-dark-gray hover:text-purple">
        Go Back</ULink>
    </UContainer>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("blog").path(route.path).first();
});
</script>
