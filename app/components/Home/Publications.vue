<template>
  <Container>
    <ProseH2>Publications</ProseH2>
    <Publication v-for="pub in pubs" :key="pub.title" :pub="pub" />
  </Container>
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
    published: true,
    award: {
      title: "Palo Alto Networks Best Paper Runner-Up",
    },
  },
]);
</script>
