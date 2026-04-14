import type { AppHeaderContactLink, AppHeaderNavItem } from "./types";

export const APP_HEADER_PHONE = "+7 (812) 509 62 09";
export const APP_HEADER_PHONE_HREF = "tel:+78125096209";
export const APP_HEADER_NOTE =
  "* Деятельность компании Meta Inc. и её продуктов Instagram и Facebook признана в России экстремистской и запрещена";

export const APP_HEADER_NAV: AppHeaderNavItem[] = [
  { id: "home", label: "Главная", to: "/" },
  { id: "services", label: "Услуги", to: "/services" },
  { id: "catalog", label: "Каталог ЖК", to: "/catalog" },
  { id: "journal", label: "Журнал", to: "/journal" },
  {
    id: "about",
    label: "О компании",
    children: [
      { id: "about-company", label: "О компании МЁД", to: "/about" },
      { id: "about-career", label: "Карьера", to: "/career" },
      { id: "about-reviews", label: "Отзывы", to: "/reviews" },
    ],
  },
  { id: "reviews", label: "Отзывы", to: "/reviews" },
  {
    id: "partners",
    label: "Партнерам",
    children: [
      { id: "partners-developers", label: "Застройщикам", to: "/developers" },
      {
        id: "partners-program",
        label: "Партнерская программа",
        to: "/partners",
      },
    ],
  },
  { id: "club", label: "Клуб", to: "/club" },
  { id: "contacts", label: "Контакты", to: "/contacts" },
];

export const APP_HEADER_MESSENGERS: AppHeaderContactLink[] = [
  {
    id: "telegram",
    label: "Написать в Telegram",
    href: "https://t.me/",
    icon: "tg-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "max",
    label: "Написать в Max",
    href: "#",
    icon: "max-icon",
  },
  {
    id: "vk-chat",
    label: "Написать ВКонтакте",
    href: "https://vk.com/",
    icon: "vk-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export const APP_HEADER_SOCIALS: AppHeaderContactLink[] = [
  {
    id: "social-telegram",
    label: "Telegram",
    desktopLabel: "Мы в Telegram",
    href: "https://t.me/",
    icon: "tg-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "social-vk",
    label: "ВКонтакте",
    desktopLabel: "Мы ВКонтакте",
    href: "https://vk.com/",
    icon: "vk-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "social-instagram",
    label: "Instagram*",
    desktopLabel: "Мы в Instagram*",
    href: "#",
    icon: "in-icon",
  },
  {
    id: "social-youtube",
    label: "YouTube",
    desktopLabel: "Мы в YouTube",
    href: "https://youtube.com/",
    icon: "yt-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "social-dzen",
    label: "Дзен",
    desktopLabel: "Мы в Дзен",
    href: "https://dzen.ru/",
    icon: "dz-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
