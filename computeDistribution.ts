import { InvalidCoupleError } from './errors/InvalidCoupleError';
import { NoDistributionError } from './errors/NoDistributionError';
import { isSingle } from './helpers/isSingle';

const computeDistribution = (people: string[], couples: string[][]) => {
  if (people.length < 3) {
    // for strictly less than 3 people, it is impossible to satisfy the reciprocity rule
    // (if A offers a present to B, B must not offer a present to A)
    throw new NoDistributionError();
  }

  if (people.length === 3 && couples.length > 0) {
    // for 3 people with 1 couple, there is no solution to the problem
    // this special case must be handled for the distribution algorithm to work
    throw new NoDistributionError();
  }

  const peopleGroup1: string[] = [];
  const peopleGroup2: string[] = [];

  const peopleInCouple = new Set<string>();
  for(const couple of couples) {
    if (couple.length !== 2) {
      throw new InvalidCoupleError(couple);
    }

    peopleGroup1.push(couple[0]);
    peopleGroup2.push(couple[1]);

    peopleInCouple.add(couple[0]);
    peopleInCouple.add(couple[1]);
  }

  let groupNumber = 1;
  for(const person of people) {
    if (!isSingle(person, peopleInCouple)){
      continue;
    }

    if (groupNumber === 1) {
      peopleGroup1.push(person);
      groupNumber = 2;
    } else if(groupNumber === 2) {
      peopleGroup2.push(person);
      groupNumber = 1;
    }
  }

  return [...peopleGroup1, ...peopleGroup2];
}

export default computeDistribution;
