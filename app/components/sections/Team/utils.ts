import type { TeamPerson } from "./types";

export const getShuffledTeamPeople = (people: TeamPerson[]): TeamPerson[] => {
  const items = [...people];

  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    const currentItem = items[index];
    const randomItem = items[randomIndex];

    if (!currentItem || !randomItem) {
      continue;
    }

    items[index] = randomItem;
    items[randomIndex] = currentItem;
  }

  return items;
};

export const getRandomTeamPeople = (
  people: TeamPerson[],
  count: number,
): TeamPerson[] => {
  return getShuffledTeamPeople(people).slice(0, count);
};

export const getTeamColumns = (people: TeamPerson[]): TeamPerson[][] => {
  const [
    firstPerson,
    secondPerson,
    thirdPerson,
    fourthPerson,
    fifthPerson,
    sixthPerson,
    seventhPerson,
  ] = people;

  return [
    firstPerson ? [firstPerson] : [],
    [secondPerson, thirdPerson].filter(Boolean) as TeamPerson[],
    [fourthPerson, fifthPerson].filter(Boolean) as TeamPerson[],
    [sixthPerson, seventhPerson].filter(Boolean) as TeamPerson[],
  ];
};
