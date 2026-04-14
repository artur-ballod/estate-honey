export type AppHeaderMobileView = "nav" | "contacts";
export type AppHeaderNavVariant = "desktop" | "mobile";
export type AppHeaderContactLinksVariant = "dropdown" | "mobile";
export type AppHeaderContactLinksType = "messengers" | "socials";

export interface AppHeaderBaseItem {
  id: string;
  label: string;
  icon?: string;
}

export interface AppHeaderRouteLink extends AppHeaderBaseItem {
  to: string;
}

export interface AppHeaderExternalLink extends AppHeaderBaseItem {
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
}

export interface AppHeaderNavChild extends AppHeaderRouteLink {}

export interface AppHeaderNavItem extends AppHeaderBaseItem {
  to?: string;
  children?: AppHeaderNavChild[];
}

export interface AppHeaderContactLink extends AppHeaderExternalLink {
  desktopLabel?: string;
}