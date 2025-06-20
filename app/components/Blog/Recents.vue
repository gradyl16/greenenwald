<template>
  <h2>Recent</h2>
  <nav>
    <ul
      v-if="posts"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">
          <UCard
            class="hover:outline hover:shadow-xl transition-all duration-300 ease-in-out"
            variant="soft"
          >
            <template #header>
              {{ post.title }}
            </template>
            <template #footer>
              {{ post.description }}
            </template>
          </UCard>
        </NuxtLink>
      </li>
    </ul>
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
