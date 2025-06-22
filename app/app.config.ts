export default defineAppConfig({
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "purple",
      secondary: "green",
      success: "pink",
      info: "cyan",
      warning: "yellow",
      error: "red",
      neutral: "gray",
      muted: "dark-gray",
      elevated: "orange",
    },
    accordion: {
      slots: {
        trigger: "text-xl text-purple",
        body: "text-md text-dark-blue",
        trailingIcon: "text-green",
        leadingIcon: "text-gray",
        item: "border-gray",
      },
    },
    link: {
      base: "hover:underline"
    },
    card: {
      slots: {
        header: "rounded-t-lg bg-gray/40 font-bold text-purple",
        footer: "rounded-b-lg bg-gray/60 font-semibold text-sm text-dark-blue"
      }
    },
    container: {
      base: "rounded-3xl bg-dark-gray p-8",
    },
    navigationMenu: {
      defaultVariants: {
        color: "primary",
        highlightColor: "primary",
        variant: "link",
      },
      variants: {
        highlightColor: {
          primary: "text-purple",
        },
      },
    },
  },
});
