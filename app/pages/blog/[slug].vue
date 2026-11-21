<template>
  <ProseSection>
    <BaseContainer>
      <ContentRenderer v-if="page" :value="page" />
    </BaseContainer>
  </ProseSection>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "post",
});

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("blog").path(route.path).first(),
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

useSeoMeta({
  title: `${page.value.title} | Mental Overflow`,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
  ogType: "article",
});
</script>
