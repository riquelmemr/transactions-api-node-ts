import { v4 as uuid } from 'uuid';

class User {
  private _id: string;
  private _name: string;
  private _age: number;
  private _cpf: string;
  private _email: string;
  private transactions: any[];

  constructor(name: string, age: number, cpf: string, email: string) {
    this._id = uuid();
    this._name = name;
    this._age = age;
    this._cpf = cpf;
    this._email = email;
    this.transactions = [];
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
}

export default User;