export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqQuestionCta {
  text: string;
  buttonText: string;
}

export interface FaqContactLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  target?: string;
  rel?: string;
}

export interface FaqHelpCardData {
  title: string;
  phoneLabel: string;
  phonePrefix: string;
  phoneMain: string;
  phoneHref: string;
  messengersLabel: string;
  messengers: FaqContactLink[];
}

export interface FaqSectionContent {
  title: string;
  items: FaqItem[];
  questionCta: FaqQuestionCta;
  helpCard: FaqHelpCardData;
}
