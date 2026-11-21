<template>
  <BaseContainer>
    <ProseH2>Publications</ProseH2>
    <div class="flex flex-col gap-4">
      <PublicationCard v-for="pub in pubs" :key="pub.title" :pub="pub" />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import type { Publication } from "~/types/Publication";

const pubs: Publication[] = [
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
    pdf: "/prism2026-12.pdf",
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
];
</script>
