import type { MenuItem } from "~/types/NavigationItem";

export const useMenu = () => {
  const route = useRoute();
  const isBlog = computed(() => route.path.startsWith("/blog"));

  const staticItems: MenuItem[] = [
    { label: "Home", icon: "uil:home", to: "/" },
    { label: "Blog", icon: "uil:laptop", to: "/blog" },
    {
      label: "CV",
      icon: "uil:file-alt",
      to: "/Greenenwald_CV_2026.pdf",
      target: "_blank",
      external: true,
    },
  ];

  const homeIntra: MenuItem[] = [
    { label: "About", icon: "uil:user", to: "#about" },
    { label: "News", icon: "uil:newspaper", to: "#news" },
    { label: "Publications", icon: "uil:book-open", to: "#publications" },
  ];

  const blogIntra: MenuItem[] = [
    { label: "About", icon: "uil:document-info", to: "/blog#about" },
    { label: "Recent Posts", icon: "uil:bolt", to: "/blog#recent" },
  ];

  const menuItems = computed(() => ({
    intraItems: isBlog.value ? blogIntra : homeIntra,
    interItems: staticItems,
  }));

  return { menuItems };
};
