// import remarkGfm from "remark-gfm"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  devtools: { enabled: true },
  routeRules: {
    "/": { prerender: true },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/content",
    "@nuxthub/core",
  ],
  fonts: {
    families: [
      {
        name: "Fira Code",
        fallbacks: [
          "ui-monospace", "SFMono-Regular", "monospace"
        ]
      }
    ],
  },
  css: ["~/assets/css/main.css"],
  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-gfm": {},
        },
        toc: {
          depth: 2,
          searchDepth: 2,
        },
        highlight: {
          theme: "dracula",
          langs: ["py"],
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-27",
});
