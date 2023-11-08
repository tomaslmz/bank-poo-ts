import { type Model } from './Interfaces/Model'
import { type Cpf } from './Types/Cpf'
import { type Email } from './Types/Email'
import { type Phone } from './Types/Phone'

export class People implements Model {
  constructor (
    private _id: number,
    private _name: string,
    private _createdAt: Date = new Date(),
    private _email?: Email,
    private _phone?: Phone,
    private _cpf?: Cpf,
  ) {

    this.id = _id
    
    this.name = _name

    if (_email !== undefined) {
      this.email = _email
    }

    this.createdAt = _createdAt

    if (_cpf !== undefined) {
      this.cpf = _cpf
    }

    if (_phone !== undefined) {
      this.phone = _phone
    }
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

  set name (name: string) {
    try {
      if (!(name.length > 0)) {
        throw new Error('Name is invalid!')
      }

      this._name = name
    } catch (e: any) {
      console.log(e.message)
    }
  }

  get name (): string {
    return this._name
  }

  set email (email: Email) {
    this._email = email
  }

  get email (): string | undefined {
    if(this._email === undefined) {
      return ''
    }

    return this._email.email
  }

  set phone (phone: Phone) {
    this._phone = phone
  }

  get phone (): string {
    if(this._phone === undefined) {
      return ''
    }

    return this._phone.phone
  }

  set cpf (cpf: Cpf) {
    this._cpf = cpf
  }

  get cpf (): string {
    if(this._cpf === undefined) {
      return ''
    }

    return this._cpf.cpf
  }

  set createdAt (date: Date) {
    this._createdAt = date
  }

  get createdAt (): Date {
    return this._createdAt
  }
}
