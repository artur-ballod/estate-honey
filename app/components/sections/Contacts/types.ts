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
  embedSrc: string;
  buttonText: string;
  buttonHref: string;
}

export interface ContactsSectionContent {
  title: string;
  items: ContactsSectionItem[];
  map: ContactsSectionMap;
}
