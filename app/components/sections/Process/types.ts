export interface ProcessSlide {
  id: string;
  step: number;
  stepIcon: string;
  title: string;
  description: string[];
  buttonText: string;
  buttonTo: string;
}

export interface ProcessTab {
  id: string;
  label: string;
  slides: ProcessSlide[];
}
