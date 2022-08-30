import parseArgs from 'minimist';

import computeDistribution from './computeDistribution';
import { logResponse } from './helpers/logResponse';
import { validateArgs } from './helpers/validateArgs';


try{
  const args = parseArgs(process.argv);
  const { people, couples } = validateArgs(args);

  const distribution = computeDistribution(people, couples);

  logResponse(distribution);
} catch(error) {
    console.error((error as Error).message);
}
