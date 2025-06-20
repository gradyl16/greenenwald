<template>
  <div class="my-8 relative group font-mono text-sm">
    <!-- Filename / Language Header -->
    <div
      v-if="filename"
      class="flex justify-between items-center bg-gray/10 text-white px-4 py-2 rounded-t-md"
    >
      <span>{{ filename }}</span>
      <span class="transition-opacity duration-200 group-hover:opacity-0">{{ language }}</span>
    </div>
    <pre
      :class="[
        $props.class,
        'relative overflow-x-auto p-4 bg-gray/20',
        filename ? 'rounded-b-md' : 'rounded-md',
      ]"
    ><slot /></pre>
    <button
      class="absolute top-2 right-2 bg-purple/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 hover:bg-dark-blue/80 hover:outline hover:outline-white transition"
      @click="copyToClipboard"
    >
      <Icon v-if="copied" name="uil:check-circle" />
      <Icon v-else name="uil:copy" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

// Provide feedback when user copies the code in mockup
const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;

    // Automatically reset the button to appear copiable
    setTimeout(() => (copied.value = false), 1500);
  } catch (e) {
    console.error("Copy failed", e);
  }
};
</script>
