// TODO: write your code here
export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    const term1 = /^[\w-]*$/.test(this.nickname);
    const term2 = !/(\d{4,})+/g.test(this.nickname);
    const term3 = /^[^\d-_].*[^\d-_]$/.test(this.nickname);
    const result = term1 && term2 && term3;
    return result;
  }
}
