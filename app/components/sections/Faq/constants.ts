import type { FaqSectionContent } from "./types";

export const FAQ_INITIAL_VISIBLE_COUNT = 4;

export const FAQ_SECTION_CONTENT: FaqSectionContent = {
  title: "Частые вопросы\nи\u00A0ответы на них",

  items: [
    {
      id: "faq-1",
      question: "Сколько стоят ваши услуги?",
      answer:
        "Стоимость зависит от задачи, формата сопровождения и состава сделки.",
    },
    {
      id: "faq-2",
      question: "Какие скрытые платежи мне стоит ожидать?",
      answer: "Мы заранее проговариваем обязательные и сопутствующие расходы.",
    },
    {
      id: "faq-3",
      question: "Как будет происходить процесс?",
      answer:
        "Сначала уточняем запрос, затем подбираем и анализируем варианты.",
    },
    {
      id: "faq-4",
      question: "Что требуется от меня как от покупателя?",
      answer: "Нужны вводные по бюджету, срокам и пожеланиям.",
    },
    {
      id: "faq-5",
      question: "Можно ли работать дистанционно?",
      answer: "Да, значительную часть процесса можно вести дистанционно.",
    },
  ],

  questionCta: {
    text: "Не нашли ответ на ваш вопрос? Задайте его, и мы ответим\u00A0лично:",
    buttonText: "Задать свой вопрос",
  },

  helpCard: {
    title: "Нужна помощь\nс\u00A0недвижимостью?",
    phoneLabel: "Свяжитесь с нами по телефону:",
    phonePrefix: "+7 812",
    phoneMain: "509 62 09",
    phoneHref: "tel:+78125096209",
    messengersLabel: "Или напишите в удобном для вас мессенджере:",
    messengers: [
      {
        id: "faq-contact-telegram",
        label: "telegram",
        href: "/",
        icon: "tg-icon",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        id: "faq-contact-vk",
        label: "vk",
        href: "/",
        icon: "vk-icon",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        id: "faq-contact-instagram",
        label: "instagram",
        href: "/",
        icon: "in-icon",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
};
