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
    value: "9:00",
    label: "9:00",
  },
  {
    value: "9:30",
    label: "9:30",
  },
  {
    value: "10:00",
    label: "10:00",
  },
  {
    value: "10:30",
    label: "10:30",
  },
  {
    value: "11:00",
    label: "11:00",
  },
  {
    value: "11:30",
    label: "11:30",
  },  
  {
    value: "12:00",
    label: "12:00",
  },
  {
    value: "12:30", 
    label: "12:30",
  },
  {
    value: "13:00",
    label: "13:00",
  },
  {
    value: "13:30",
    label: "13:30",
  },
  {
    value: "14:00",
    label: "14:00",
  },
  {
    value: "14:30",
    label: "14:30",
  },
  {
    value: "15:00",
    label: "15:00",
  },
  {
    value: "15:30",
    label: "15:30",
  },
  {
    value: "16:00",
    label: "16:00",
  },
  {
    value: "16:30",
    label: "16:30",
  },
  {
    value: "17:00",
    label: "17:00",
  },
  {
    value: "17:30",
    label: "17:30",
  },
  {
    value: "18:00",
    label: "18:00",
  },
  {
    value: "18:30",
    label: "18:30",
  },
  {
    value: "19:00",
    label: "19:00",
  },
  {
    value: "19:30",
    label: "19:30",
  },
  {
    value: "20:00",
    label: "20:00",
  },
  {
    value: "20:30",
    label: "20:30",
  },
  {
    value: "21:00",
    label: "21:00",
  },
  {
    value: "21:30",
    label: "21:30",
  },
  {
    value: "22:00",
    label: "22:00",
  },
  {
    value: "22:30",
    label: "22:30",
  }
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
