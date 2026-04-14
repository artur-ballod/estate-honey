import type { AppIntroContent } from "./types";

export const APP_INTRO_CONTENT: AppIntroContent = {
  lead: ["Центр Недвижимости «МЁД».", "Профессионально, честно, ненавязчиво."],
  title: "Помогаем покупать и\u00A0продавать недвижимость",
  actions: [
    {
      id: "catalog",
      text: "Посмотреть каталог ЖК",
      to: "/catalog",
      variant: "neutral-border",
      icon: "btn-arrow",
    },
    {
      id: "services",
      text: "Наши услуги",
      to: "/services",
      variant: "simple",
    },
  ],
  images: [
    {
      id: "building",
      name: "building",
      src: "/images/intro/intro-building.jpg",
      alt: "Жилой комплекс",
    },
    {
      id: "agent-main",
      name: "agent-main",
      src: "/images/intro/intro-agent-main.png",
      alt: "Специалист по недвижимости",
    },
    {
      id: "agent-secondary",
      name: "agent-secondary",
      src: "/images/intro/intro-agent-secondary.png",
      alt: "Клиент",
    },
  ],
};
