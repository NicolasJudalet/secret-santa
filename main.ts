import parseArgs, { ParsedArgs } from 'minimist';

import computeDistribution from './computeDistribution';
import { InvalidArgumentError } from './errors/InvalidArgumentError';
import { MissingArgumentError } from './errors/MissingArgumentError';
import { NoDistributionError } from './errors/NoDistributionError';
import { validateArgs } from './helpers/validateArgs';


try{
  const args = parseArgs(process.argv);
  const { people, couples } = validateArgs(args);

  computeDistribution(people, couples);
} catch(error) {
  if (
    error instanceof NoDistributionError
    || error instanceof MissingArgumentError
    || error instanceof InvalidArgumentError
  ) {
    console.error(error.message);
  }
}
