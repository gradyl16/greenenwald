<!-- <template> -->
<!--   <article -->
<!--     class="group rounded-xl border border-gray/40 bg-dark-gray/40 p-5 sm:p-6 transition hover:border-white/60 hover:bg-test/60" -->
<!--   > -->
<!--     <h4 class="text-cyan transition"> -->
<!--       {{ pub.title }} -->
<!--     </h4> -->
<!---->
<!--     <p class="text-purple">{{ pub.authors.join(", ") }}.</p> -->
<!---->
<!--     <p class="text-purple"> -->
<!--       <span v-if="!pub.published" class="italic opacity-80">(To appear)</span> -->
<!--       <span> In the proceedings of </span> -->
<!--       <a -->
<!--         class="text-pink underline hover:text-pink/80" -->
<!--         :href="pub.venue.url" -->
<!--         target="_blank" -->
<!--         rel="noopener" -->
<!--       > -->
<!--         {{ pub.venue.name }} -->
<!--       </a> -->
<!--     </p> -->
<!---->
<!--     <p class="mt-1 text-sm text-purple/80"> -->
<!--       {{ pub.venue.date }}, {{ pub.venue.loc }} -->
<!--     </p> -->
<!--   </article> -->
<!-- </template> -->
<!---->
<!-- <script setup lang="ts"> -->
<!-- // import type { Publication } from "../../types/publication"; -->
<!-- const props = defineProps<{pub: Publication}>(); -->
<!---->
<!-- </script> -->

<template>
  <article
    class="group rounded-xl border border-gray/40 bg-dark-gray/40 p-5 sm:p-6 transition hover:border-white/60 hover:bg-test/60"
  >
    <h4 class="text-cyan transition">
      {{ pub.title }}
    </h4>

    <p class="text-purple">{{ formattedAuthors }}.</p>

    <p class="text-purple">
      <span v-if="!pub.published" class="italic opacity-80">(To appear)</span>
      <span> In the proceedings of </span>
      <a
        class="text-pink underline hover:text-pink/80"
        :href="pub.venue.url"
        target="_blank"
        rel="noopener"
      >
        {{ pub.venue.name }}
      </a>
    </p>

    <p class="mt-1 text-sm text-purple/80">
      {{ pub.venue.date }}, {{ pub.venue.loc }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { Publication } from "~/types/publication";

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
