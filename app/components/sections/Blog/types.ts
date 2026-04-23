export interface BlogLink {
  id: string;
  label: string;
  to: string;
  count: number;
}

export interface BlogCardMeta {
  date: string;
  category: string;
  views: number;
  likes: number;
  to: string;
}

export interface BlogCardItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  to: string;
  meta: BlogCardMeta;
}

export interface BlogContent {
  title: string;
  description: string;
  buttonText: string;
  buttonTo: string;
  categoriesAriaLabel: string;
}
