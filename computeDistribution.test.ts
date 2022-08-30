import computeDistribution from './computeDistribution';
import { emptyTestCase, onePersonTestCase, twoPeopleTestCase } from './computeDistribution.fixtures';
import { NoDistributionError } from './errors/NoDistributionError';

describe('computeDistribution script test', () => {
  it.each([
    emptyTestCase,
    onePersonTestCase,
    twoPeopleTestCase,
  ])('should throw NoDistributionError - $description', ({ people, couples }) => {
    expect(() => computeDistribution(people, couples)).toThrowError(NoDistributionError);
  })
})
