import computeDistribution from './computeDistribution';
import {
  emptyTestCase,
  onePersonTestCase,
  simpleTestCase,
  simpleTestCase2,
  twoPeopleTestCase
} from './computeDistribution.fixtures';
import { NoDistributionError } from './errors/NoDistributionError';

describe('computeDistribution script test', () => {
  it.each([
    emptyTestCase,
    onePersonTestCase,
    twoPeopleTestCase,
  ])('should throw NoDistributionError - $description', ({ people, couples }) => {
    expect(() => computeDistribution(people, couples)).toThrowError(NoDistributionError);
  })

  it.each([
    simpleTestCase,
    simpleTestCase2,
  ])('should return a correct presents distribution - $description', ({ people, couples }) => {
    expect(computeDistribution(people, couples)).toStrictEqual(people);
  })
})
