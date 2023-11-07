import { type Model } from './Interfaces/Model'
import { type Cpf } from './Types/Cpf'
import { type Email } from './Types/Email'
import { type Phone } from './Types/Phone'

export class People implements Model {
  constructor (
    private _id: number,
    private _createdAt: Date,
    private _name: string,
    private _email: Email,
    private _phone: Phone,
    private _cpf: Cpf
  ) {}

  set id (id: number) {
    if (id > 0) {
      this._id = id
    }
  }

  get id (): number {
    return this._id
  }

  set name (name: string) {
    if (name.length > 0) {
      this._name = name
    }
  }

  get name (): string {
    return this._name
  }

  set email (email: Email) {
    this._email = email
  }

  get email (): string {
    return this._email.email
  }

  set phone (phone: Phone) {
    this._phone = phone
  }

  get phone (): string {
    return this._phone.phone
  }

  set cpf (cpf: Cpf) {
    this._cpf = cpf
  }

  get cpf (): string {
    return this._cpf.cpf
  }

  set createdAt (date: Date) {
    this._createdAt = date
  }

  get createdAt (): Date {
    return this._createdAt
  }
}
