export interface ContactsSectionLine {
  id: string;
  text: string;
  href?: string;
  target?: "_blank" | "_self";
  rel?: string;
}

export interface ContactsSectionItem {
  id: string;
  label: string;
  lines: ContactsSectionLine[];
  extraLink?: {
    text: string;
    href: string;
    target?: "_blank" | "_self";
    rel?: string;
  };
}

export interface ContactsSectionMap {
  coords: [number, number];
  zoom: number;
  markerLabel?: string;
  theme?: "light" | "dark";
  buttonText: string;
  buttonHref: string;
}

export interface ContactsSectionContent {
  title: string;
  items: ContactsSectionItem[];
  map: ContactsSectionMap;
}
