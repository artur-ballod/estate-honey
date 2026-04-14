import type { ProcessTab } from "./types";

export const PROCESS_INTRO_TEXT =
  "Выберите свою жизненную ситуацию, и мы покажем как будем решать вашу задачу:";

export const PROCESS_TABS: ProcessTab[] = [
  {
    id: "perfect-flat",
    label: "Найти идеальную\n квартиру",
    slides: [
      {
        id: "perfect-flat-step-1",
        step: 1,
        stepIcon: "one-icon",
        title: "Знакомимся и обсуждаем ваш запрос",
        description: [
          "— Определим важные критерии вашей счастливой жизни",
          "— Выберем подходящие районы города, оценим перспективы их развития",
        ],
        buttonText: "Записаться на встречу",
        buttonTo: "/",
      },
      {
        id: "perfect-flat-step-2",
        step: 2,
        stepIcon: "",
        title: "Подбираем подходящие варианты",
        description: [
          "— Составим первичный пул объектов под ваш бюджет и запрос",
          "— Отсеем слабые варианты и оставим только релевантные решения",
        ],
        buttonText: "Получить подборку",
        buttonTo: "/",
      },
      {
        id: "perfect-flat-step-3",
        step: 3,
        stepIcon: "one-icon",
        title: "Организуем просмотры",
        description: [
          "— Согласуем удобный маршрут и график показов",
          "— Сравним объекты не только по цене, но и по качеству среды",
        ],
        buttonText: "Обсудить просмотры",
        buttonTo: "/",
      },
    ],
  },
  {
    id: "mortgage",
    label: "Одобрить\nипотеку",
    slides: [
      {
        id: "mortgage-step-1",
        step: 1,
        stepIcon: "one-icon",
        title: "Анализируем вашу ситуацию",
        description: [
          "— Проверим вводные данные и доступные ипотечные программы",
          "— Определим, как повысить вероятность одобрения",
        ],
        buttonText: "Оставить заявку",
        buttonTo: "/",
      },
      {
        id: "mortgage-step-2",
        step: 2,
        stepIcon: "",
        title: "Подбираем решение",
        description: [
          "— Сравним условия банков и формат подачи",
          "— Подготовим оптимальный сценарий одобрения",
        ],
        buttonText: "Получить консультацию",
        buttonTo: "/",
      },
    ],
  },
  {
    id: "investment",
    label: "Инвестировать\nв недвижимость",
    slides: [
      {
        id: "investment-step-1",
        step: 1,
        stepIcon: "one-icon",
        title: "Формируем инвестиционную стратегию",
        description: [
          "— Определим вашу цель: рост капитала, аренда или перепродажа",
          "— Подберем подходящий горизонт и бюджет входа",
        ],
        buttonText: "Обсудить стратегию",
        buttonTo: "/",
      },
      {
        id: "investment-step-2",
        step: 2,
        stepIcon: "",
        title: "Сравниваем объекты",
        description: [
          "— Оценим доходность, ликвидность и риски",
          "— Отберем наиболее перспективные варианты",
        ],
        buttonText: "Получить подборку",
        buttonTo: "/",
      },
    ],
  },
  {
    id: "new-build",
    label: "Экскурсии\nпо новостройкам",
    slides: [
      {
        id: "new-build-step-1",
        step: 1,
        stepIcon: "",
        title: "Определяем формат экскурсии",
        description: [
          "— Подберем жилые комплексы под ваш запрос",
          "— Согласуем маршрут и удобное время просмотра",
        ],
        buttonText: "Записаться",
        buttonTo: "/",
      },
      {
        id: "new-build-step-2",
        step: 2,
        stepIcon: "",
        title: "Показываем и сравниваем",
        description: [
          "— Разберем сильные и слабые стороны каждого проекта",
          "— Поможем сопоставить варианты по ключевым критериям",
        ],
        buttonText: "Получить консультацию",
        buttonTo: "/",
      },
    ],
  },
];
