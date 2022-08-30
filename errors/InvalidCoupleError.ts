export class InvalidCoupleError extends Error {
  constructor(couple: string[]) {
    super();
    this.message = `Couple ${JSON.stringify(couple)} is invalid - couples must contain only 2 members`
  }
}
