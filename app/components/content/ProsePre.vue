<template>
  <div class="my-4 relative group font-mono text-sm">
    <!-- Filename / Language Header -->
    <div
      v-if="showHeader"
      class="flex justify-between items-center px-4 py-2 bg-base/10 text-white rounded-t-md"
    >
      <div class="space-x-2">
        <Icon :name="languageIcon" />
        <span v-if="language">{{ language }}</span>
      </div>
      <span
        v-if="filename"
        class="transition-opacity duration-200 group-hover:opacity-0"
      >
        {{ filename }}
      </span>
    </div>

    <pre
      :class="[
        $props.class,
        'relative overflow-x-auto p-4 bg-base/20',
        showHeader ? 'rounded-b-md' : 'rounded-md',
      ]"
    ><slot /></pre>

    <button
      type="button"
      :aria-label="copied ? 'Copied' : 'Copy code'"
      :title="copied ? 'Copied' : 'Copy code'"
      class="absolute top-2 right-2 bg-purple/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 focus-visible:opacity-100 hover:bg-comment/80 hover:outline hover:outline-white transition"
      @click="copyToClipboard"
    >
      <Icon v-if="copied" name="uil:check-circle" />
      <Icon v-else name="uil:copy" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string;
    filename?: string;
    highlights?: number[];
    meta?: string;
    class?: string;
  }>(),
  {
    code: "",
    language: "",
    filename: "",
    highlights: () => [],
    meta: "",
    class: "",
  },
);

// Copy to clipboard functionality
const copied = ref(false);
let copiedTimer: ReturnType<typeof setTimeout> | undefined;

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    copied.value = true;
    clearTimeout(copiedTimer);
    copiedTimer = setTimeout(() => (copied.value = false), 1500);
  } catch (e) {
    console.error("Copy failed", e);
  }
};

onBeforeUnmount(() => clearTimeout(copiedTimer));

// Show the header bar when there's something to put in it.
const showHeader = computed(
  () => !!props.filename || (!!props.language && props.language !== "text"),
);

// Language-to-icon mapping
const languageIconMap: Record<string, string> = {
  bash: "mdi:console",
  sh: "mdi:console",
  shell: "mdi:console",
  python: "vscode-icons:file-type-python",
  javascript: "vscode-icons:file-type-js-official",
  typescript: "vscode-icons:file-type-ts",
  html: "vscode-icons:file-type-html",
  css: "vscode-icons:file-type-css",
  json: "vscode-icons:file-type-json",
  vue: "vscode-icons:file-type-vue",
  text: "mdi:file-document-outline",
};

const languageIcon = computed(() => {
  const lang = props.language.toLowerCase();
  return languageIconMap[lang] || "mdi:file-outline";
});
</script>
