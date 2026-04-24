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
      name: "first",
      src: "/images/intro/intro-1.png",
      alt: "Жилой комплекс",
    },
    {
      id: "agent-main",
      name: "second",
      src: "/images/intro/intro-2.png",
      alt: "Специалист по недвижимости",
    },
    {
      id: "agent-secondary",
      name: "third",
      src: "/images/intro/intro-3.png",
      alt: "Клиент",
    },
  ],
};
