export class Validator {
  validateUsername(username) {
    const re = /^[a-zA-Z]+(\d{1,3}[a-zA-Z-_]+)*\d{0,3}[a-zA-Z]$/;
    return re.test(username);
  }
}
