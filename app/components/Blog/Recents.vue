<template>
  <ProseH2 class="!mt-0">Recent</ProseH2>
  <ul
    v-if="posts?.length"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <li v-for="post in posts" :key="post.path">
      <BlogPreview :post="post" />
    </li>
  </ul>
  <ProseP v-else>No posts yet. Check back soon!</ProseP>
</template>

<script setup lang="ts">
// Fetch the 8 most recent blog posts for the "Recent" section
const { data: posts } = await useAsyncData("blog-posts", () =>
  queryCollection("blog")
    .select("path", "title", "description", "date")
    .order("date", "DESC")
    .limit(8)
    .all(),
);
</script>
