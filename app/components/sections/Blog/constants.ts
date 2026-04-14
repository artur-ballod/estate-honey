import type { BlogCardItem, BlogContent, BlogLink } from "./types";

export const BLOG_CONTENT: BlogContent = {
  title: "Журнал о недвижимости —\u00A0это наш блог",
  description:
    "Делимся с вами опытом и новостями о рынке недвижимости как с друзьями",
  buttonText: "Посмотреть другие статьи в\u00A0журнале",
  buttonTo: "/blog",
  categoriesAriaLabel: "Разделы блога",
};

export const BLOG_LINKS: BlogLink[] = [
  {
    id: "all",
    label: "Все статьи",
    to: "/blog",
    count: 1382,
  },
  {
    id: "popular",
    label: "Популярное",
    to: "/blog/popular",
    count: 1250,
  },
  {
    id: "new-buildings",
    label: "Новостройки",
    to: "/blog/new-buildings",
    count: 9,
  },
  {
    id: "real-estate-news",
    label: "Новости рынка",
    to: "/blog/real-estate-news",
    count: 88,
  },
  {
    id: "mortgage",
    label: "Ипотека",
    to: "/blog/mortgage",
    count: 62,
  },
  {
    id: "investments",
    label: "Инвестиции",
    to: "/blog/investments",
    count: 8,
  },
  {
    id: "advice",
    label: "Советы",
    to: "/blog/advice",
    count: 43,
  },
  {
    id: "districts",
    label: "Районы",
    to: "/blog/districts",
    count: 33,
  },
  {
    id: "sales-start",
    label: "Старт продаж",
    to: "/blog/sales-start",
    count: 35,
  },
  {
    id: "cases",
    label: "Кейсы",
    to: "/blog/cases",
    count: 77,
  },
  {
    id: "layouts",
    label: "Планировки",
    to: "/blog/layouts",
    count: 104,
  },
  {
    id: "law",
    label: "Право",
    to: "/blog/law",
    count: 3,
  },
  {
    id: "residential-news",
    label: "Новости\u00A0ЖК",
    to: "/blog/residential-news",
    count: 81,
  },
];

export const BLOG_ARTICLES: BlogCardItem[] = [
  {
    id: "article-1",
    title:
      "Новый закон о риелторской деятельности: узнали планируемые изменения на рынке недвижимости",
    description:
      "В ближайшее время в Государственной думе России может быть представлен законопроект, касающийся риелторской деятельности...",
    imageSrc: "/images/blog/blog-card-1.png",
    imageAlt: "Современные жилые дома",
    to: "/blog/new-law-for-realtor-activity",
    meta: {
      date: "Сегодня",
      category: "Новости",
      views: 1234,
      likes: 280,
    },
  },
  {
    id: "article-2",
    title:
      "Наследство от «Плюшкина» — можно ли выгодно избавиться от бытового хлама",
    description:
      "Накопление вещей неизбежно. В любом доме со временем появляются, если не горы, то уж точно залежи ненужного...",
    imageSrc: "/images/blog/blog-card-2.png",
    imageAlt: "Человек рядом с мешками вещей",
    to: "/blog/inheritance-and-household-clutter",
    meta: {
      date: "Сегодня",
      category: "Советы",
      views: 1234,
      likes: 280,
    },
  },
  {
    id: "article-3",
    title:
      "Нотариальное оформление сделок\nс недвижимостью: тарифы снижаются\nдо 30 тысяч рублей",
    description:
      "Согласно информации от Федеральной нотариальной палаты, введение обязательного нотариального оформления сделок...",
    imageSrc: "/images/blog/blog-card-3.png",
    imageAlt: "Современный загородный дом",
    to: "/blog/notary-deal-fees-reduced",
    meta: {
      date: "2 дня назад",
      category: "Новости",
      views: 1234,
      likes: 280,
    },
  },
  {
    id: "article-4",
    title:
      "ЖК Talento — клубный дом\nпремиум-класса в Московском районе\u00A0СПб",
    description:
      "ЖК Talento в СПБ — камерный элитный проект от девелопера Fizika Development, расположенный на Заставской улице, всего в 10...",
    imageSrc: "/images/blog/blog-card-4.png",
    imageAlt: "Фасад жилого комплекса премиум-класса",
    to: "/blog/talento-premium-house",
    meta: {
      date: "30 января 2026",
      category: "Новостройки",
      views: 1234,
      likes: 280,
    },
  },
];
