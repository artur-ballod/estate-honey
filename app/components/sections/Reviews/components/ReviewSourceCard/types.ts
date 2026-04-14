import type { ReviewRating } from "../../types";

export interface ReviewSourceCardProps {
  sourceName: string;
  icon: string;
  rating: ReviewRating;
  reviewsCount: number;
  to?: string;
  linkText?: string;
  dataType?: string;
}
