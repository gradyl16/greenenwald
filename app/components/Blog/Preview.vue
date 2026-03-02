<template>
  <NuxtLink :to="post.path" class="block group">
    <Card>
      <ProseH3
        class="group-hover:text-purple transition-colors duration-300"
      >
        {{ post.title }}
      </ProseH3>
      <div class="h-px bg-white/20"></div>
      <ProseP class="mt-4 text-sm">{{ post.description }}</ProseP>
    </Card>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
