<template>
  <NuxtLink :to="post.path" class="block group h-full">
    <BaseCard class="h-full">
      <ProseH3 class="group-hover:text-purple transition-colors duration-300">
        {{ post.title }}
      </ProseH3>
      <time
        v-if="post.date"
        :datetime="post.date"
        class="block -mt-3 mb-3 text-xs text-light-gray"
      >
        {{ formattedDate }}
      </time>
      <div class="h-px bg-white/20" />
      <ProseP class="mt-4 text-sm">{{ post.description }}</ProseP>
    </BaseCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { BlogCollectionItem } from "@nuxt/content";

const props = defineProps<{
  post: Pick<BlogCollectionItem, "path" | "title" | "description" | "date">;
}>();

const formattedDate = computed(() =>
  new Date(`${props.post.date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);
</script>
