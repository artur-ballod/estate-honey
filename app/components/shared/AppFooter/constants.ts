import type {
  AppFooterContact,
  AppFooterMenuGroup,
  AppFooterMeta,
  AppFooterSocial,
} from "./types";

export const APP_FOOTER_MENU_GROUPS: AppFooterMenuGroup[] = [
  {
    id: "footer-menu-navigation",
    title: "Навигация",
    ariaLabel: "Навигация по сайту",
    links: [
      { id: "home", label: "Главная", href: "/" },
      { id: "services", label: "Услуги", href: "/services" },
      { id: "catalog", label: "Каталог ЖК", href: "/catalog" },
      { id: "journal", label: "Журнал", href: "/journal" },
      { id: "reviews", label: "Отзывы", href: "/reviews" },
      { id: "club", label: "Клуб", href: "/club" },
      { id: "contacts", label: "Контакты", href: "/contacts" },
    ],
  },
  {
    id: "footer-menu-company",
    title: "О компании",
    ariaLabel: "О компании",
    links: [
      { id: "about", label: "О компании МЁД", href: "/about" },
      { id: "career", label: "Карьера", href: "/career" },
      { id: "company-reviews", label: "Отзывы", href: "/reviews" },
    ],
  },
  {
    id: "footer-menu-partners",
    title: "Партнерам",
    ariaLabel: "Раздел для партнеров",
    links: [
      { id: "developers", label: "Застройщикам", href: "/partners/developers" },
      {
        id: "affiliate-program",
        label: "Партнерская программа",
        href: "/partners/program",
      },
    ],
  },
];

export const APP_FOOTER_CONTACTS: AppFooterContact[] = [
  {
    id: "footer-phone",
    label: "+7 (812) 509 62 09",
    href: "tel:+78125096209",
  },
  {
    id: "footer-email",
    label: "info@cn-med.ru",
    href: "mailto:info@cn-med.ru",
  },
];

export const APP_FOOTER_SOCIALS: AppFooterSocial[] = [
  {
    id: "footer-social-telegram",
    label: "Telegram",
    href: "https://t.me/",
    icon: "tg-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "footer-social-vk",
    label: "VK",
    href: "https://vk.com/",
    icon: "vk-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "footer-social-instagram",
    label: "Instagram",
    href: "https://instagram.com/",
    icon: "in-icon",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

export const APP_FOOTER_META: AppFooterMeta = {
  privacy: {
    id: "footer-privacy-policy",
    label: "Политика конфиденциальности",
    href: "/privacy-policy",
  },
  copyright: "© 2026 Центр недвижимости «МЁД»",
  summary: "Помогаем людям находить оптимальные решения с недвижимостью.",
  disclaimerLead:
    "Данный сайт носит исключительно информационный характер и не является публичной офертой. Проектная документация всех жилых комплексов находится на сайте",
  projectDocsLabel: "наш.дом.рф",
  projectDocsHref: "https://наш.дом.рф",
  disclaimerTail: "Для получения актуальной информации о ценах, обращайтесь к менеджерам отдела продаж:",
  phoneLabel: "8 (812) 509-62-09",
  phoneHref: "tel:88125096209",
  developer: {
    id: "footer-developer",
    label: "Дизайн и разработка сайта GLADKOV",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
  },
}
