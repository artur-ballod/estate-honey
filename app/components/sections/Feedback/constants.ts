import type {
  FeedbackCallDayOption,
  FeedbackCallTimeOption,
  FeedbackFormErrors,
  FeedbackFormState,
  FeedbackSectionContent,
  FeedbackTopic,
} from "./types";

export const FEEDBACK_SECTION_CONTENT: FeedbackSectionContent = {
  title: "Оставьте заявку",
  description: "Обсудим ваш запрос\nи поможем решить задачу",
  topicsLabel: "Выберите темы обращения:",
  contactsLabel: "Введите ваше имя и номер телефона:",
  namePlaceholder: "Ваше имя",
  phonePlaceholder: "Ваш номер телефона",
  callDayLabel: "Когда вам позвонить?",
  callTimePlaceholder: "время звонка",
  privacyLabel:
    "Согласен с политикой конфиденциальности и даю разрешение на обработку моих персональных данных",
  submitText: "Оставить заявку",
  submitErrorText: "Заполните все данные, чтобы оставить заявку",
  topicsRequiredError: "Выберите хотя бы одну тему обращения",
  nameRequiredError: "Введите имя",
  phoneRequiredError: "Введите номер телефона",
  phoneInvalidError: "Введите корректный номер телефона",
  privacyRequiredError: "Необходимо согласие на обработку персональных данных",
};

export const FEEDBACK_TOPICS: FeedbackTopic[] = [
  {
    id: "consultation",
    value: "consultation",
    label: "Получить первичную консультацию",
  },
  {
    id: "selection",
    value: "selection",
    label: "Получить подборку квартир",
  },
  {
    id: "sell",
    value: "sell",
    label: "Продать квартиру",
  },
  {
    id: "estimation",
    value: "estimation",
    label: "Оценить квартиру для продажи",
  },
  {
    id: "secondary",
    value: "secondary",
    label: "Подобрать квартиру на вторичном рынке недвижимости",
  },
  {
    id: "sell-and-buy",
    value: "sell-and-buy",
    label: "Продать квартиру и купить квартиру одновременно",
  },
];

export const FEEDBACK_CALL_DAY_OPTIONS: FeedbackCallDayOption[] = [
  {
    id: "call-today",
    value: "today",
    label: "Сегодня",
  },
  {
    id: "call-tomorrow",
    value: "tomorrow",
    label: "Завтра",
  },
];

export const FEEDBACK_CALL_TIME_OPTIONS: FeedbackCallTimeOption[] = [
  {
    value: "morning",
    label: "Утром",
  },
  {
    value: "day",
    label: "Днем",
  },
  {
    value: "evening",
    label: "Вечером",
  },
];

export const FEEDBACK_FORM_INITIAL_STATE: FeedbackFormState = {
  topics: [],
  name: "",
  phone: "",
  callDay: "today",
  callTime: "",
  isPrivacyAccepted: false,
};

export const FEEDBACK_FORM_INITIAL_ERRORS: FeedbackFormErrors = {
  topics: "",
  name: "",
  phone: "",
  privacy: "",
  submit: "",
};
