export class UserAlreadyVerifiedError extends Error {
  constructor(message = 'Your account is already verified') {
    super(message);
    this.name = 'UserAlreadyVerifiedError';
  }
}
