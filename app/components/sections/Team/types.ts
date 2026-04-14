export interface TeamPersonStat {
  rating: number;
  reviewsCount: number;
}

export interface TeamPerson {
  id: string;
  name: string;
  position: string;
  imageSrc: string;
  imageAlt: string;
  stats: TeamPersonStat;
  href?: string;
  isHighlighted?: boolean;
}

export interface TeamConsultationActionPayload {
  actionId: string;
  person: TeamPerson;
}

export type TeamInfoCardVariant = "about" | "career";
export type TeamInfoCardActionType = "link" | "shuffle";

export interface TeamInfoCardAction {
  id: string;
  label: string;
  type: TeamInfoCardActionType;
  to?: string;
  theme?: "primary" | "secondary" | "ghost" | "transparent"
  hideOnMobile?: boolean;
  showArrow?: boolean;
}

export interface TeamInfoCard {
  id: string;
  variant: TeamInfoCardVariant;
  text: string;
  actions?: TeamInfoCardAction[];
}
