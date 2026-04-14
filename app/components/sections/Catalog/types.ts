export type CatalogTabId = "newbuildings" | "resale" | "commercial";

export interface CatalogCardItem {
  id: string;
  title: string;
  location: string;
  locationTagColor: string;
  image: string;
  imageAlt: string;
  flatsLabel: string;
  priceLabel: string;
  to: string;
  detailsLabel?: string;
}

export interface CatalogMapLink {
  label: string;
  to: string;
  icon?: string;
}

export interface CatalogTab {
  id: CatalogTabId;
  label: string;
  count: number;
  description: string;
  items: CatalogCardItem[];
  mapLink?: CatalogMapLink;
}

export interface CatalogPromo {
  lead: string;
  title: string;
  buttonLabel: string;
  buttonTo: string;
  image: string;
  imageAlt: string;
}

export interface CatalogSectionContent {
  title: string;
  tabs: CatalogTab[];
  promo: CatalogPromo;
}
