import type { ContactsSectionContent } from "./types";

export const CONTACTS_SECTION_CONTENT: ContactsSectionContent = {
  title: "Как нас найти?",
  items: [
    {
      id: "address",
      label: "Адрес",
      lines: [
        {
          id: "city",
          text: "Санкт-Петербург",
        },
        {
          id: "street",
          text: "ул. Чапаева д. 15, корпус 2, лит В,",
        },
        {
          id: "office",
          text: "БЦ «Сенатор», 7 этаж, офис 703",
        },
      ],
      extraLink: {
        text: "как пройти в офис?",
        href: "/",
      },
    },
    {
      id: "contacts",
      label: "Для связи",
      lines: [
        {
          id: "phone",
          text: "+7 (812) 509 62 09",
          href: "tel:+78125096209",
        },
        {
          id: "time",
          text: "(ежедневно с 10:00 до 21:00)",
        },
        {
          id: "email",
          text: "info@cn-med.ru",
          href: "mailto:info@cn-med.ru",
        },
      ],
    },
    {
      id: "socials",
      label: "Мы в соцсетях",
      lines: [
        {
          id: "vk",
          text: "Вконтакте",
          href: "/",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          id: "dzen",
          text: "Дзен",
          href: "/",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          id: "telegram",
          text: "Телеграм",
          href: "/",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ],
    },
  ],
  map: {
    embedSrc:
      "https://yandex.ru/map-widget/v1/?um=constructor%3Aexample&amp;source=constructor",
    buttonText: "Смотреть на Яндекс Картах",
    buttonHref: "https://yandex.ru/maps/",
  },
};
