export interface NavigationIcon {
  name: string;
  size?: string;
  mode?: "css" | "svg";
  class?: string;
}

export interface NavigationItem {
  label?: string;
  to: string;
  target?: string;
  external?: boolean;
  class?: string;
}

/** Item rendered in the top navigation bar (icon is a plain icon name). */
export interface MenuItem extends NavigationItem {
  label: string;
  icon?: string;
}

/** Item rendered by <CustomLink> (icon carries its own styling). */
export interface LinkItem extends NavigationItem {
  icon?: NavigationIcon;
}
