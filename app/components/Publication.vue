<template>
  <Card>
    <NuxtLink
      class="group inline-block transition duration-300 no-underline hover:no-underline"
      to="/prism2026-12.pdf"
      target="_blank"
      rel="noopener"
      external
    >
      <ProseH4
        class="flex items-center gap-2 !my-0 !text-cyan transition-colors duration-300 group-hover:!text-pink"
      >
        {{ pub.title }}
        <Icon
          v-if="pub.published"
          name="bi:filetype-pdf"
          size="1em"
          mode="svg"
          class="text-pink transition-colors duration-300 group-hover:text-red"
        />
      </ProseH4>
    </NuxtLink>
    <p class="text-purple">{{ formattedAuthors }}.</p>
    <span v-if="!pub.published" class="italic opacity-80">(To appear)</span>
    <span class="text-purple"> In the Proceedings of the </span>
    <NuxtLink
      class="text-orange underline hover:text-yellow hover:decoration-yellow transition-colors duration-300"
      :to="pub.venue.url"
      target="_blank"
      rel="noopener"
      external
    >
      {{ pub.venue.name }}
    </NuxtLink>
    <p class="mt-1 text-sm text-purple/80">
      {{ pub.venue.date }}, {{ pub.venue.loc }}
    </p>
    <div
      v-if="pub.award"
      class="font-extrabold italic text-pink flex items-center gap-2"
    >
      {{ pub.award.title }}
      <Icon name="uil:trophy" size="1em" mode="svg" class="text-pink" />
    </div>
  </Card>
</template>

<script setup lang="ts">
const props = defineProps<{
  pub: Publication;
}>();

const formattedAuthors = computed(() => {
  const a = props.pub.authors;
  if (!a || a.length === 0) return "";
  if (a.length === 1) return a[0];
  if (a.length === 2) return `${a[0]} and ${a[1]}`;
  return `${a.slice(0, -1).join(", ")}, and ${a[a.length - 1]}`;
});
</script>
