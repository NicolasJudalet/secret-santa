import { ParsedArgs } from 'minimist'
import { InvalidArgumentError } from '../errors/InvalidArgumentError'
import { MissingArgumentError } from '../errors/MissingArgumentError'

export const validateArgs = (args: ParsedArgs) => {
  if(!args.people) {
    throw new MissingArgumentError('people', '\'["adèle","bertrand"]\'')
  }

  try {
    const people = JSON.parse(args.people);
    const couples = JSON.parse(args.couples ?? '[]');

    return { people, couples }
  } catch(error) {
    throw new InvalidArgumentError();
  }
}
