<template>
  <Card>
    <component
      :is="pub.pdf ? NuxtLink : 'div'"
      v-bind="
        pub.pdf
          ? { to: pub.pdf, target: '_blank', rel: 'noopener', external: true }
          : {}
      "
      class="group inline-block no-underline"
    >
      <ProseH4
        class="flex items-center gap-2 !my-0 !text-cyan transition-colors duration-300"
        :class="{ 'group-hover:!text-pink': pub.pdf }"
      >
        {{ pub.title }}
        <Icon
          v-if="pub.pdf"
          name="bi:filetype-pdf"
          size="1em"
          mode="svg"
          class="shrink-0 text-pink transition-colors duration-300 group-hover:text-red"
          aria-label="PDF"
        />
      </ProseH4>
    </component>

    <p class="mt-2 text-purple">
      <template v-for="author in authors" :key="author.name">
        <span :class="{ underline: author.name === SELF }">{{
          author.name
        }}</span
        >{{ author.sep }}
      </template>
    </p>

    <p class="text-purple">
      <span v-if="!pub.published" class="italic opacity-80">(To appear) </span>
      In the Proceedings of the
      <NuxtLink
        class="text-orange underline hover:text-yellow hover:decoration-yellow transition-colors duration-300"
        :to="pub.venue.url"
        target="_blank"
        rel="noopener"
        external
      >
        {{ pub.venue.name }}
      </NuxtLink>
    </p>
    <p class="mt-1 text-sm text-purple/80">
      {{ pub.venue.date }}, {{ pub.venue.loc }}
    </p>
    <p
      v-if="pub.award"
      class="mt-1 font-extrabold italic text-pink flex items-center gap-2"
    >
      {{ pub.award.title }}
      <Icon name="uil:trophy" size="1em" mode="svg" class="text-pink" />
    </p>
  </Card>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import type { Publication } from "~/types/Publication";

const SELF = "Dylen Greenenwald";

const props = defineProps<{
  pub: Publication;
}>();

// "A", "A and B", "A, B, and C" — with the separator attached to each name
// so the template can style individual authors.
const authors = computed(() => {
  const list = props.pub.authors;
  const n = list.length;
  return list.map((name, i) => {
    let sep = "";
    if (i < n - 2) sep = ", ";
    else if (i === n - 2) sep = n === 2 ? " and " : ", and ";
    return { name, sep };
  });
});
</script>
