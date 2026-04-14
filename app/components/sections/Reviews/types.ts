export type ReviewItemType = "review" | "source";

export type ReviewRating = number;

export interface ReviewAuthor {
  name: string;
  avatar: string;
  avatarAlt?: string;
}

export interface ReviewsSectionImage {
  src: string;
  alt: string;
}

export interface ReviewCardItem {
  id: string;
  type: "review";
  author: ReviewAuthor;
  rating: ReviewRating;
  title: string;
  text: string;
  to?: string;
  linkText?: string;
}

export interface ReviewSourceCardItem {
  id: string;
  type: "source";
  sourceName: string;
  icon: string;
  rating: ReviewRating;
  reviewsCount: number;
  to?: string;
  linkText?: string;
}

export type ReviewsSectionItem = ReviewCardItem | ReviewSourceCardItem;
