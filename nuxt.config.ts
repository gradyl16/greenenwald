// import remarkGfm from "remark-gfm"

export default defineNuxtConfig({
  // debug: true,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
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
        provider: "local",
        src: "/fonts/FiraCode.woff2",
      },
      {
        name: "Proxima Nova",
        provider: "local",
        src: "/fonts/ProximaNovaRegular.woff2",
      },
      {
        name: "Proxima Nova Semibold",
        provider: "local",
        src: "/fonts/ProximaNovaSemibold.woff2",
      },
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

