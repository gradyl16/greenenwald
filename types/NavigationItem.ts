export interface NavigationItem {
  label?: string;
  to: string;
  icon?: {
    name: string;
    size: string;
    mode: string;
    class: string;
  };
  target?: string;
  external?: boolean;
  children?: Array<{ label: string; to: string; icon?: string }>;
  class?: string;
}
