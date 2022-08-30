import computeDistribution from './computeDistribution';
import { NoDistributionError } from './errors/NoDistributionError';

try{
  computeDistribution([], []);
} catch(error) {
  if (error instanceof NoDistributionError) {
    console.error(error.message);
  }
}
