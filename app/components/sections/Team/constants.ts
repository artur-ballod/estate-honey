import type { TeamInfoCard } from "./types";

export const TEAM_SECTION_CONTENT = {
  title: "За 8 лет мы помогли более чем 2890 людям",
  subtitle: "решить вопросы с недвижимостью",
  description:
    "Мы рады оказывать квалифицированную поддержку своим клиентам и поддерживаем их на пути к мечте о квартире",
};

export const TEAM_VISIBLE_PERSONS_COUNT_DESKTOP = 7;

export const TEAM_CARD_CONSULTATION_ACTION = {
  id: "open-consultation-modal",
  label: "Записаться\nна консультацию",
  variant: "transparent" as const,
};

export const TEAM_INFO_CARDS: TeamInfoCard[] = [
  {
    id: "team-about",
    variant: "about",
    text: "В нашей команде 87 экспертов, мы любим свою работу и точно знаем, как помочь клиенту решить вопрос с недвижимостью.",
    actions: [
      {
        id: "show-more-experts",
        label: "Показать ещё экспертов",
        type: "shuffle",
        variant: "simple",
        hideOnMobile: true,
      },
      {
        id: "about-company",
        label: "Подробнее о ЦН МЁД",
        type: "link",
        to: "/about",
        variant: "simple-purple",
      },
    ],
  },
  {
    id: "team-career",
    variant: "career",
    text: "Хотите стать частью нашей команды? Напишите нам и расскажите о себе.",
    actions: [
      {
        id: "join-team",
        label: "Хочу в вашу команду",
        type: "link",
        to: "/career",
        variant: "ghost",
        showArrow: true,
      },
    ],
  },
];
