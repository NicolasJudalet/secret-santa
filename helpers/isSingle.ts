export const isSingle = (person: string, peopleInCouple: Set<string>) => {
  return !peopleInCouple.has(person);
}
