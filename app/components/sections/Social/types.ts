export type SocialCardSize = "sm" | "lg";

export interface SocialChannelCardItem {
  id: string;
  variant: "channel";
  href: string;
  icon: string;
  label: string;
  followers: string;
  size?: SocialCardSize;
}

export interface SocialPostCardItem {
  id: string;
  variant: "post";
  href: string;
  icon: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  views: string;
  size?: SocialCardSize;
}

export type SocialCardItem = SocialChannelCardItem | SocialPostCardItem;

export interface SocialsSectionContent {
  title: string;
  description: string;
  channels: SocialChannelCardItem[][];
  posts: SocialPostCardItem[];
}
