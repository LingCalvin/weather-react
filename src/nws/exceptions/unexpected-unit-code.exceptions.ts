export default class UnexpectedUnitCodeException extends Error {
  constructor(public unitCode: string) {
    super(`Unexpected unit code: ${unitCode}`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnexpectedUnitCodeException);
    }

    this.name = "UnexpectedUnitCodeException";
  }
}
