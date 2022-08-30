import computeDistribution from './computeDistribution';
import { NoDistributionError } from './errors/NoDistributionError';

describe('computeDistribution script test', () => {
  it('should throw NoDistributionError when called with empty arrays', () => {
    expect(() => computeDistribution([], [])).toThrowError(NoDistributionError);
  })
})
