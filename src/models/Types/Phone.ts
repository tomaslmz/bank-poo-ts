export class Phone {
  constructor (private _phone: string) {

  }

  set phone (phone: string) {
    if (this.checkPhone(phone)) {
      this._phone = phone
    }
  }

  get phone (): string {
    return this._phone
  }

  checkPhone (phone: string): boolean {
    const regex = /^(?:(?:\\+|00)?(55)\\s?)?(?:(?:\\(?[1-9][0-9]\\)?)?\\s?)?(?((?:9\\d|[2-9])\\d{3})-?(\\d{4}))$/
    return regex.test(phone)
  }
}
