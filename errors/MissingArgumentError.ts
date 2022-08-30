export class MissingArgumentError extends Error {
  constructor(argName: string, argExampleValue: string) {
    super();
    this.message = `Please provide a --${argName} option - Example: yarn run computeDistribution --${argName}=${argExampleValue}`;
  }
}
