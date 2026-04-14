import type { ReviewAuthor, ReviewRating } from "../../types";

export interface ReviewCardProps {
  author: ReviewAuthor;
  rating: ReviewRating;
  title: string;
  text: string;
  to?: string;
  linkText?: string;
}
