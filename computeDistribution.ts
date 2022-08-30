import { NoDistributionError } from './errors/NoDistributionError';

const computeDistribution = (people: string[], couples: string[][]) => {
  throw new NoDistributionError();
}

export default computeDistribution;
