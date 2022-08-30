export class InvalidArgumentError extends Error {
  constructor() {
    super();
    this.message = `Error parsing arguments: arguments provided must be valid JSON strings (NB: values must use double quotes)`;
  }
}
