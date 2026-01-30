<template>
  <h2>Publications</h2>
  <div>
    <Publication v-for="pub in pubs" :key="pub.title" :pub="pub" />
  </div>
</template>

<script setup lang="ts">
const pubs = ref<Publication[]>([
  {
    title:
      "How to Effectively Trace Provenance on Windows Endpoint Detection & Response Telemetry",
    authors: [
      "Jason Liu",
      "Muhammad Adil Inam",
      "Akul Goyal",
      "Dylen Greenenwald",
      "Saurav Chittal",
      "Adam Bates",
    ],
    venue: {
      name: "Workshop on Attack Provenance, Reasoning, and Investigation for Security in the Monitored Environment (PRISM)",
      date: "February 23, 2026",
      loc: "San Diego, CA",
      url: "https://www.ndss-symposium.org/ndss2026/co-located-events/prism/",
    },
  },
]);

const formattedAuthors = computed(() => {
  const a = pub.authors;
  if (a.length <= 1) return a.join("");
  if (a.length === 2) return `${a[0]} and ${a[1]}`;
  return `${a.slice(0, -1).join(", ")}, and ${a[a.length - 1]}`;
});
</script>
