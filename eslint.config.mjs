// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // Prettier owns formatting and always writes void elements as <br />.
    "vue/html-self-closing": [
      "warn",
      { html: { void: "any", normal: "always", component: "always" } },
    ],
  },
});
