export interface AwardSlide {
  id: string;
  year: string;
  label: string;
  title: string;
  subtitle?: string;
  description: string;
  awardImage: string;
  awardImageAlt: string;
  partnerLogo?: string;
  partnerLogoAlt?: string;
  href?: string;
}
