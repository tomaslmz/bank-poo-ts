import { BankAccount } from "./models/BankAccount";
import { Customer } from "./models/Customer";

const customer = new Customer(1, 'name');

const account = new BankAccount(1, customer);

customer.account = account;

account.deposit(500);

console.log(account.balance);

account.transfer(300, 'Tomás');

console.log(account.extract);