<template>
  <NuxtLayout name="post">
    <ProseSection>
      <Container class="flex flex-col items-center text-center">
        <ProseH2>{{ is404 ? "Page Not Found" : "Something Went Wrong" }}</ProseH2>
        <ProseP>
          {{
            is404
              ? "Oops! The content you're looking for doesn't exist."
              : "An unexpected error occurred. Please try again later."
          }}
        </ProseP>
        <button
          class="inline-block p-3 mt-2 font-semibold text-cyan/70 bg-light/50 rounded-xl outline outline-light hover:outline-lighter hover:text-purple transition-all duration-300"
          @click="clearError({ redirect: backTo })"
        >
          {{ backLabel }}
        </button>
      </Container>
    </ProseSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();

const is404 = computed(() => props.error.statusCode === 404);
const route = useRoute();
const isBlog = computed(() => route.path.startsWith("/blog"));
const backTo = computed(() => (isBlog.value ? "/blog" : "/"));
const backLabel = computed(() => (isBlog.value ? "Back to Blog" : "Back Home"));

useSeoMeta({
  title: () => `${props.error.statusCode} | Dylen Greenenwald`,
  robots: "noindex",
});
</script>
