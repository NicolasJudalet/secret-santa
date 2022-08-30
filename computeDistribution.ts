import { NoDistributionError } from './errors/NoDistributionError';

const computeDistribution = (people: string[], couples: string[][]) => {
  if (people.length < 3) {
    // for strictly less than 3 people, it is impossible to satisfy the reciprocity rule:
    // if A offers a present to B, B must not offer a present to A
    throw new NoDistributionError();
  }

  if (couples.length === 0) {
    return people;
  }

  throw new NoDistributionError();
}

export default computeDistribution;
