export class Email {
  constructor (private _email: string) {
    this.email = this._email
  }

  set email (email: string) {
    try {
      if (!this.checkEmail(email)) {
        throw new Error('E-mail is invalid!')
      }

      this._email = email
    } catch (e: any) {
      console.log(e.message)
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
