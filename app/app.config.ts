export default defineAppConfig({
  icon: {
    mode: "css",
    cssLayer: "base",
  },
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
  },
});
