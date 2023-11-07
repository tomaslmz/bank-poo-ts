export class Phone {
  constructor (private _phone: string) {

  }

  set phone (phone: string) {
    try {
      if (!this.checkPhone(phone)) {
        throw new Error('Phone is invalid!')
      }
      this._phone = phone
    } catch (e: any) {
      console.log(e.message)
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
