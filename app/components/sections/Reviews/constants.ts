import type { ReviewsSectionImage, ReviewsSectionItem } from "./types";

export const REVIEWS_SECTION_TITLE = "Путь к дому, которому доверяют";

export const REVIEWS_SECTION_LEAD = "нам пишут теплые слова о\u00A0сотрудничестве:";

export const REVIEWS_SECTION_IMAGE: ReviewsSectionImage = {
  src: "/images/reviews/reviews-main-image.png",
  alt: "Клиенты агентства недвижимости",
};

export const REVIEWS_SECTION_MORE_BUTTON = {
	text: 'Читать больше историй',
	to: '/reviews',
}

export const REVIEWS_SECTION_ITEMS: ReviewsSectionItem[] = [
  {
    id: "review-1",
    type: "review",
    author: {
      name: "Виктория Павлова",
      avatar: "/images/reviews/author-1.png",
      avatarAlt: "Виктория Павлова",
    },
    rating: 3,
    title: "Купить квартиру 55 метров у метро Маяковская",
    text: "Выражаю огромную благодарность риелтору Валерии. Вместе с ней мы пошли путь от изучения рынка недвижимости (у меня были довольно нетипичные условия по квартире) до выбора отличного варианта, который я бы...",
    to: "/reviews",
    linkText: "Читать отзыв полностью",
  },
  {
    id: "review-2",
    type: "review",
    author: {
      name: "Кирилл Зарубин",
      avatar: "/images/reviews/author-2.png",
      avatarAlt: "Кирилл Зарубин",
    },
    rating: 5,
    title: "Продать квартиру и купить новую",
    text: "Выражаю огромную благодарность риелтору Валерии. Вместе с ней мы пошли путь от изучения рынка недвижимости (у меня были довольно нетипичные условия по квартире) до выбора отличного варианта, который я бы...",
    to: "/reviews",
    linkText: "Читать отзыв полностью",
  },
  {
    id: "review-3",
    type: "review",
    author: {
      name: "Фидан Хлебников",
      avatar: "/images/reviews/author-3.png",
      avatarAlt: "Фидан Хлебников",
    },
    rating: 2,
    title: "Продать квартиру и купить новую",
    text: "Выражаю огромную благодарность риэлтору Валерии. Вместе с ней мы прошли путь от изучения рынка недвижимости до выбора отличного варианта, который я бы...",
    to: "/reviews",
    linkText: "Читать отзыв полностью",
  },
  {
    id: "review-4",
    type: "review",
    author: {
      name: "Анна Багрова",
      avatar: "/images/reviews/author-4.png",
      avatarAlt: "Анна Багрова",
    },
    rating: 4,
    title: "Продать квартиру и купить новую",
    text: "Выражаю огромную благодарность риэлтору Валерии. Вместе с ней мы прошли путь от изучения рынка недвижимости до выбора отличного варианта, который я бы...",
    to: "/reviews",
    linkText: "Читать отзыв полностью",
  },
  {
    id: "review-5",
    type: "review",
    author: {
      name: "Кирилл Зарубин",
      avatar: "/images/reviews/author-2.png",
      avatarAlt: "Кирилл Зарубин",
    },
    rating: 5,
    title: "Продать квартиру и купить новую",
    text: "Выражаю огромную благодарность риэлтору Валерии. Вместе с ней мы прошли путь от изучения рынка недвижимости до выбора отличного варианта, который я бы...",
    to: "/reviews",
    linkText: "Читать отзыв полностью",
  },
  {
    id: "review-6",
    type: "review",
    author: {
      name: "Фидан Хлебников",
      avatar: "/images/reviews/author-3.png",
      avatarAlt: "Фидан Хлебников",
    },
    rating: 2,
    title: "Продать квартиру и купить новую",
    text: "Выражаю огромную благодарность риэлтору Валерии. Вместе с ней мы прошли путь от изучения рынка недвижимости до выбора отличного варианта, который я бы...",
    to: "/reviews",
    linkText: "Читать отзыв полностью",
  },
  {
    id: "review-7",
    type: "review",
    author: {
      name: "Анна Багрова",
      avatar: "/images/reviews/author-4.png",
      avatarAlt: "Анна Багрова",
    },
    rating: 4,
    title: "Продать квартиру и купить новую",
    text: "Выражаю огромную благодарность риэлтору Валерии. Вместе с ней мы прошли путь от изучения рынка недвижимости до выбора отличного варианта, который я бы...",
    to: "/reviews",
    linkText: "Читать отзыв полностью",
  },
  {
    id: "source-yandex",
    type: "source",
    sourceName: "Яндекс",
    icon: "ya-icon",
    rating: 5,
    reviewsCount: 743,
    to: "/reviews",
    linkText: "Читать все отзывы",
  },
  {
    id: "source-2gis",
    type: "source",
    sourceName: "2ГИС",
    icon: "2gis-icon",
    rating: 5,
    reviewsCount: 743,
    to: "/reviews",
    linkText: "Читать все отзывы",
  },
  {
    id: "source-vk",
    type: "source",
    sourceName: "VK",
    icon: "vk-icon",
    rating: 5,
    reviewsCount: 743,
    to: "/reviews",
    linkText: "Читать все отзывы",
  },
];
