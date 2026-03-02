<template>
  <Container>
    <ProseH2>News</ProseH2>
    <UAccordion :items="items" />
  </Container>
</template>

<script setup lang="ts">
const items = ref<AccordionItem[]>([
  {
    label: "Received First Award at PRISM '26",
    icon: "uil:trophy",
    content:
      "The wonderful group at the STS lab helped me earn an award on my first publication. Our paper was awarded the Palo Alto Networks Best Paper Runner-Up at the workshop for Provenance, Reasoning, and Investigation for Security in the Monitored Environment (PRISM 2026). I had the privilege of leading an interactive tutorial that walked workshop attendees through a provenance tracing exercise using Windows EDR telemetry. I am eternally grateful to Professor Bates for affording me the opportunity to work with this team on an awesome project.",
  },
  {
    label: "Published First Work at PRISM '26",
    icon: "uil:file-alt",
    content:
      "I'm excited to announce that I am an author on my first academic paper! Feel free to read it (linked below), but, in a nutshell, Windows' operating system design exacerbates the long-standing dependency explosion issue with provenance-based analysis. We propose some interesting graph tracing techniques to address this problem.",
  },
  {
    label: "Committed to Ph.D. Program @ UIUC",
    icon: "uil:lock",
    content:
      "After deep consideration, I've decided to attend the University of Illinois at Urbana-Champaign to pursue my Ph.D. in Computer Science. I will broadly study cybersecurity, starting in the fall of 2024.",
  },
  {
    label: "Obtained B.S. in Computer Science @ UIC",
    icon: "uil:graduation-cap",
    content:
      "I received my Bachelor Degree in Computer Science from the University of Illinois at Chicago. I graduated with Summa Cum Laude Latin Honors, finishing with a GPA of 3.92.",
  },
  {
    label: "First Internship",
    icon: "uil:rocket",
    content:
      "I accepted a winter sprinternship at Nvisia! I will be working as a DevSecOps Engineer on an internal profile building service that will aid in marketing their consultants to clients, getting exposure to Azure Cloud platforms along the way.",
  },
]);
</script>
