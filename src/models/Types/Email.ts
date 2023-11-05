export class Email {
  constructor (private _email: string) {
    this.email = this._email
  }

  set email (email: string) {
    if (this.checkEmail(email)) {
      this._email = email
    }
  }

  get email (): string {
    return this._email
  }

  checkEmail (email: string): boolean {
    const regex = /^(.+)@(\S+)$/
    return regex.test(email)
  }
}
