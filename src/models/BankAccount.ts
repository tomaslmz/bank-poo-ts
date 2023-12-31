import { type Model } from './Interfaces/Model'
import { type People } from './People'

export class BankAccount implements Model {
  private readonly _extract: string[] = [];

  constructor (
    private _id: number,
    private _holder: People,
    private _accountNumber: number = 1,
    private _balance: number = 0,
    private _agency: number = 1,
    private _createdAt: Date = new Date()
  ) {
    this.id = _id
    this.accountNumber = _accountNumber
    this.balance = _balance
    this.holder = _holder
    this.agency = _agency
    this.createdAt = _createdAt
  }

  set id (id: number) {
    try {
      if (!(id > 0)) {
        throw new Error('ID is invalid!')
      }

      this._id = id
    } catch (e: any) {
      console.log(e.message)
    }
  }

  get id (): number {
    return this._id
  }

  set accountNumber (accountNumber: number) {
    try {
      if (!(accountNumber > 0)) {
        throw new Error('Account number is invalid!')
      }

      this._accountNumber = accountNumber
    } catch (e: any) {
      console.log(e.message)
    }
  }

  get accountNumber (): number {
    return this._accountNumber
  }

  set balance (balance: number) {
    try {
      this._balance = balance
    } catch (e: any) {
      console.log(e.message)
    }
  }

  get balance (): number {
    return this._balance
  }

  set holder (holder: People) {
    this._holder = holder
  }

  get holder (): People {
    return this._holder
  }

  set agency (agency: number) {
    try {
      if (!(agency > 0)) {
        throw new Error('Agency is invalid!')
      }

      this._agency = agency
    } catch (e: any) {
      console.log(e.message)
    }
  }

  get agency (): number {
    return this._agency
  }

  get extract (): string[] {
    return this._extract
  }

  set createdAt (date: Date) {
    this._createdAt = date
  }

  get createdAt (): Date {
    return this._createdAt
  }

  withdraw (value: number): void {
    try {
      if (value > this._balance) {
        throw new Error('You don\'t have sufficient balance!')
      }

      if (value <= 0) {
        throw new Error('Insert a valid value to withdraw!')
      }

      this.addExtract('Withdraw', value);
      this.balance = this._balance - value
    } catch (e: any) {
      console.log(e.message);
    }
  }

  deposit (value: number): void {
    try {
      if (value <= 0) {
        throw new Error('Insert a valid value to deposit!')
      }

      this.balance = this._balance + value
      this.addExtract('Deposit', value);
    } catch (e: any) {
      console.log(e.message)
    }
  }

  transfer(value: number, destiny: string) {
    try {
      if(value <= 0) {
        throw new Error('Invalid value!');
      }

      if(value > this._balance) {
        throw new Error('Insufficient balance!');
      }

      if(destiny.length == 0) {
        throw new Error('Insert a valid destiny!');
      }

      this.addExtract('Transfer', value, destiny);
      this.balance = this._balance - value;
    } catch(e: any) {
      console.log(e.message);
    }
  }

  addExtract (type: string, value: number, destiny?: string, fee?: number): void {
    try {
      const regex = /([a-zA-Z]|[à-ü]|[À-Ü])/

      if (type === '' || !regex.test(type)) {
        throw new Error('Insert a valid type!')
      }

      if (value === 0) {
        throw new Error('Insert a valid value!')
      }

      let extract = `\nType: ${type}\nValue: ${value}`

      if (destiny !== null && destiny !== undefined) {
        if (!regex.test(destiny)) {
          throw new Error('Insert a valid destiny!')
        }

        extract += `\nDestiny: ${destiny}`
      }

      extract += `\nDate: ${new Date().toLocaleDateString()}\nTime: ${new Date().getHours()}:${new Date().getMinutes()}`

      if (fee !== null && fee !== undefined) {
        extract += `\nFee: ${fee}`
      }

      this._extract.push(extract)
    } catch (e: any) {
      console.log(e.message)
    }
  }
}
