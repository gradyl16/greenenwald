export default defineAppConfig({
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  icon: {
    mode: 'css',
    cssLayer: 'base'
  },
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'purple',
      secondary: 'orange',
      tertiary: 'cyan',
      success: 'green',
      info: 'dark-blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'gray',
    },
    button: {
      defaultVariants: {
        color: 'primary'
      }
    },
    navigationMenu: {
      slots: {
      }
    },
    accordion: {
      slots: {
        trigger: 'text-xl text-purple',
        body: 'text-md text-dark-blue',
        trailingIcon: 'text-cyan',
        leadingIcon: 'text-gray',
        item: 'text-gray'
      }
    },
  },
})
