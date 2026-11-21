export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        {
          rel: "preload",
          href: "/fonts/ProximaNovaRegular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/content",
    "@nuxthub/core",
  ],
  ui: {
    // Fonts are self-hosted via @font-face in main.css; skip @nuxt/fonts.
    fonts: false,
  },
  css: ["~/assets/css/main.css"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-27",
});
