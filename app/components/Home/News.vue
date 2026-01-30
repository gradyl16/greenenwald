<script setup lang="ts">
const items = ref<AccordionItem[]>([
  {
    label: "Published at my first workshop",
    icon: "uil:file-alt",
    content:
      "Took me long enough! I'm excited to announce that I am an author on my first academic paper, published at PRISM, colocated with NDSS '26. It won't be long before I get a first author paper :)",
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

<template>
  <UAccordion :items="items" />
</template>
