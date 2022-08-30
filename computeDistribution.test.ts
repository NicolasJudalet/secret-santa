import computeDistribution from './computeDistribution';
import {
  emptyTestCase,
  fourPeopleOneCoupleTestCase,
  fourPeopleTwoCouplesTestCase,
  genericTestCase,
  onePersonTestCase,
  simpleTestCase,
  simpleTestCase2,
  threePeopleOneCoupleTestCase,
  twoPeopleTestCase
} from './computeDistribution.fixtures';
import { NoDistributionError } from './errors/NoDistributionError';
import { isDistributionValid } from './helpers/isDistributionValid';

describe('computeDistribution script test', () => {
  it.each([
    emptyTestCase,
    onePersonTestCase,
    twoPeopleTestCase,
    threePeopleOneCoupleTestCase,
  ])('should throw NoDistributionError - $description', ({ people, couples }) => {
    expect(() => computeDistribution(people, couples)).toThrowError(NoDistributionError);
  })

  it.each([
    simpleTestCase,
    simpleTestCase2,
    fourPeopleOneCoupleTestCase,
    fourPeopleTwoCouplesTestCase,
    genericTestCase,
  ])('should return a correct presents distribution - $description', ({ people, couples }) => {
    const distribution = computeDistribution(people, couples);
    expect(isDistributionValid(distribution, couples)).toBe(true);
  })
})
