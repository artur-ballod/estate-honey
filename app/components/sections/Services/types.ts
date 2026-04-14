export interface ServiceItem {
  id: string;
  title: string;
  priceText: string;
  to: string;
  featured?: boolean;
  description?: string;
  buttonText?: string;
  features?: string[];
}

export interface ServicesSectionData {
  title: string;
  items: ServiceItem[];
  moreLink: {
    text: string;
    to: string;
  };
}
