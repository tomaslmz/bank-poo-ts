import { BankAccount } from "./BankAccount";
import { People } from "./People";
import { Cpf } from "./Types/Cpf";
import { Email } from "./Types/Email";
import { Phone } from "./Types/Phone";

export class Customer extends People {
    constructor(
            _id: number,
            _name: string,
            _createdAt: Date = new Date(),
            _email?: Email,
            _phone?: Phone,
            _cpf?: Cpf,
            private _account?: BankAccount
        ) {
        super(_id, _name, _createdAt, _email, _phone, _cpf);
        if(_account !== undefined) {
            this.account = _account;
        }
    }

    set account(account: BankAccount) {
        this._account = account;
    }

    get account(): BankAccount | undefined {
        return this._account;
    }
}