<template>
  <ProseH2 class="!mt-0">Recent</ProseH2>
  <nav>
    <ProseUl
      v-if="posts"
      class="list-none !mb-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <li v-for="post in posts" :key="post.path">
        <BlogPreview :post="post" />
      </li>
    </ProseUl>
  </nav>
</template>

<script setup>
// Fetch up to 8 recent blog posts to be displayed under the "Recent" section
const { data: posts } = await useAsyncData("blog-posts", () => {
  return queryCollection("blog")
    .select("path", "title", "description")
    .limit(8)
    .all();
});
</script>
