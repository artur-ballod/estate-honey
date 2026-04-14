export type UiRatingStarType = "full" | "half" | "empty";

export interface UiRatingProps {
  rating: number;
  max?: number;
  showValue?: boolean;
}
