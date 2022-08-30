export class NoDistributionError extends Error {
  constructor() {
    super();
    this.message = 'No distribution found for given inputs';
  }
}
