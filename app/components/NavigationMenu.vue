<template>
  <Transition name="fade" mode="out-in">
    <div :key="route.path" class="bg-dark-gray rounded-3xl">
      <UNavigationMenu
        :items="items"
        :ui="{
          link: 'sm:p-4',
          item: 'sm:first:ml-4 sm:last:mr-4 rounded-2xl transition-opacity duration-300',
          viewport: 'bg-dark-gray',
          childLink:
            'aria-[current=page]:before:bg-purple/50 hover:bg-pink/40 rounded-lg',
          childLinkLabel: 'text-white group-hover:text-green',
          childLinkIcon: 'text-white group-hover:text-green',
        }"
        content-orientation="vertical"
        class="w-full"
        highlight
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const route = useRoute();

const isBlog = computed(() => route.path.startsWith("/blog"));
const items = computed(() => {
  const staticItems = [
    {
      label: "Home",
      to: "/",
      icon: "uil:home",
    },
    {
      label: "Blog",
      to: "/blog",
      icon: "uil:laptop",
      active: isBlog.value,
    },
    {
      label: "CV",
      to: "/GreenenwaldCV2025.pdf",
      icon: "uil:file-alt",
      external: true,
      target: "_blank",
    },
  ];

  const homeItems = [
    [
      {
        label: "About",
        to: "#about",
        icon: "uil:user",
      },
      {
        label: "News",
        to: "#news",
        icon: "uil:newspaper",
      },
      {
        label: "Publications",
        to: "#publications",
        icon: "uil:book-open",
      },
    ],
    staticItems,
  ];

  const blogItems = [
    [
      {
        label: "About",
        to: "/blog#about",
        icon: "uil:question",
        active: false,
      },
      {
        label: "Posts",
        icon: "uil:edit",
        children: [
          {
            label: "Recent Posts",
            to: "/blog#recent",
            icon: "uil:bolt",
            active: false,
          },
        ],
      },
    ],
    staticItems,
  ];

  return isBlog.value ? blogItems : homeItems;
});
</script>
