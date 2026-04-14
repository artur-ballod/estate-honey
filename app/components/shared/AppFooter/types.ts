export interface AppFooterLink {
  id: string;
  label: string;
  href: string;
  target?: "_self" | "_blank";
  rel?: string;
}

export interface AppFooterMenuGroup {
  id: string;
  title: string;
  ariaLabel?: string;
  links: AppFooterLink[];
}

export interface AppFooterContact {
  id: string;
  label: string;
  href: string;
}

export interface AppFooterSocial {
  id: string;
  label: string;
  href: string;
  icon: string;
  target?: "_self" | "_blank";
  rel?: string;
}

export interface AppFooterMeta {
  privacy: AppFooterLink
  copyright: string
  summary: string
  disclaimerLead: string
  projectDocsLabel: string
  projectDocsHref: string
  disclaimerTail: string
  phoneLabel: string
  phoneHref: string
  developer: AppFooterLink
}
