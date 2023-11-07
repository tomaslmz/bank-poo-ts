import { type Model } from './Interfaces/Model'
import { type People } from './People'

export class BankAccount implements Model {
  constructor (
    private _id: number,
    private _accountNumber: number,
    private _balance: number,
    private _holder: People,
    private _agency: number,
    private readonly _extract: string[],
    private _createdAt: Date
  ) {}

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
}
