export const useMenu = () => {
  const route = useRoute();
  const isBlog = computed(() => route.path.startsWith("/blog"));

  const staticItems = [
    { label: "Home", icon: "uil:home", to: "/" },
    { label: "Blog", icon: "uil:laptop", to: "/blog" },
    {
      label: "CV",
      icon: "uil:file-alt",
      to: "/GreenenwaldCV2025.pdf",
      target: "_blank",
      external: true,
    },
  ];

  const homeIntra = [
    { label: "About", icon: "uil:user", to: "#about" },
    { label: "News", icon: "uil:newspaper", to: "#news" },
    { label: "Publications", icon: "uil:book-open", to: "#publications" },
  ];

  const blogIntra = [
    { label: "About", icon: "uil:document-info", to: "/blog#about" },
    {
      label: "Posts",
      icon: "uil:edit",
      children: [
        { label: "Recent Posts", to: "/blog#recent", icon: "uil:bolt" },
      ],
    },
  ];

  const menuItems = computed(() => ({
    intraItems: isBlog.value ? blogIntra : homeIntra,
    interItems: staticItems,
  }));

  return { menuItems };
};
