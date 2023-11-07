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
    if (id > 0) {
      this._id = id
    }
  }

  get id (): number {
    return this._id
  }

  set accountNumber (accountNumber: number) {
    if (accountNumber > 0) {
      this._accountNumber = accountNumber
    }
  }

  get accountNumber (): number {
    return this._accountNumber
  }

  set balance (balance: number) {
    if (balance > 0) {
      this._balance = balance
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
    if (agency > 0) {
      this._agency = agency
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
