export interface AppIntroAction {
  id: string;
  text: string;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  variant?: "neutral-border" | "simple";
  icon?: string;
}

export type AppIntroImageName = "first" | "second" | "third";

export interface AppIntroImage {
  id: string;
  src: string;
  alt: string;
  name: AppIntroImageName;
}

export interface AppIntroContent {
  lead: string[];
  title: string;
  actions: AppIntroAction[];
  images: AppIntroImage[];
}
