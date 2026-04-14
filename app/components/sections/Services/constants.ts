import type { ServicesSectionData } from "./types";

export const SERVICES_SECTION_DATA: ServicesSectionData = {
  title: "Чем мы можем вам помочь и сколько это будет стоить?",
  moreLink: {
    text: "Посмотреть все услуги и цены",
    to: "/services",
  },
  items: [
    {
      id: "service-01",
      title: "Подобрать и купить квартиру в новостройке",
      priceText: "Бесплатно",
      to: "/services/new-buildings",
      featured: true,
      description:
        "Да, за работу наших экспертов платит застройщик. Но выбирать то будете вы.",
      buttonText: "Записаться на консультацию",
      features: [
        "Все реальные предложения на рынке, а не только «своих застройщиков»",
        "Варианты не на глаз, а отобранные по параметрам под ваше будущее и стиль жизни",
        "Акции, которых нет в открытом доступе",
        "Только надёжных застройщиков",
        "Прозрачность на каждом шаге — без давления и фраз «купите прямо сейчас или пожалеете»",
        "Не только плюсы, но и минусы планировки, окружения и условий — выход за рамки описаний с сайтов",
      ],
    },
    {
      id: "service-02",
      title: "Найти и выбрать выгодные условия у застройщиков",
      priceText: "Бесплатно",
      to: "/services/best-conditions",
      featured: true,
      description:
        "Да, за работу наших экспертов платит застройщик. Но выбирать то будете вы.",
      buttonText: "Получить подборку выгодных условий",
      features: [
        "Акции, которых нет в открытом доступе",
        "Только надёжных застройщиков",
      ],
    },
    {
      id: "service-03",
      title: "Оформить ипотеку на лучших условиях",
      priceText: "Бесплатно",
      to: "/services/mortgage",
    },
    {
      id: "service-04",
      title: "Купить квартиру на вторичке",
      priceText: "Бесплатно",
      to: "/services/resale",
    },
    {
      id: "service-05",
      title: "Подобрать и купить коммерческую недвижимость",
      priceText: "Бесплатно",
      to: "/services/commercial-property",
    },
    {
      id: "service-06",
      title: "Продать квартиру",
      priceText: "Бесплатно",
      to: "/services/sell-apartment",
    },
    {
      id: "service-07",
      title: "Найти недвижимость для выгодной инвестиции",
      priceText: "Бесплатно",
      to: "/services/investments",
    },
    {
      id: "service-08",
      title: "Найти коммерческое помещение для покупки",
      priceText: "Бесплатно",
      to: "/services/commercial-space",
    },
  ],
};
