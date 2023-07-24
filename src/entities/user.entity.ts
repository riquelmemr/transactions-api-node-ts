import { v4 as uuid } from 'uuid';
import Transaction from './transaction.entity';

class User {
  private _id: string;
  private _name: string;
  private _age: number;
  private _cpf: string;
  private _email: string;
  private _transactions: Transaction[];

  constructor(name: string, age: number, cpf: string, email: string) {
    this._id = uuid();
    this._name = name;
    this._age = age;
    this._cpf = cpf;
    this._email = email;
    this._transactions = [];
  }

  get id(): string {
    return this._id;
  }

  get cpf(): string {
    return this._cpf;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  get email(): string {
    return this._email;
  }

  get transactions(): Transaction[] {
    return this._transactions;
  } 

  set name(name: string) {
    this._name = name;
  }

  set age(age: number) {
    this._age = age;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  set email(email: string) {
    this._email = email;
  }
}

export default User;