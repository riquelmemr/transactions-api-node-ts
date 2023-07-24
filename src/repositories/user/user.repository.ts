import { users } from "../../database";
import Transaction, { TypeTransaction } from "../../entities/transaction.entity";
import User from "../../entities/user.entity";
import { BaseRepository } from "../base.repository";

class UserRepository extends BaseRepository<User>{
  constructor() {
    super(users);
  }

  getAllTransactions(userId: string) {
    const index = this.repository.findIndex((user) => user.id === userId);
    return this.repository[index].transactions;
  }

  getTransaction(id: string, transactionId: string): Transaction | undefined {
    const index = this.repository.findIndex((user) => user.id === id);
    const indexTransaction = this.repository[index].transactions.findIndex((t) => {
      return t.id === transactionId;
    })

    if (indexTransaction === -1) {
      return undefined;
    }

    return this.repository[index].transactions[indexTransaction];
  }

  createTransaction(id: string, transaction: Transaction): User {
    const index = this.repository.findIndex((user) => user.id === id);
    this.repository[index].transactions.push(transaction);
    
    return this.repository[index];
  }

  deleteTransaction(id: string, transactionId: string): User | undefined {
    const index = this.repository.findIndex((user) => user.id === id);
    const indexTransaction = this.repository[index].transactions.findIndex((t) => {
      return t.id === transactionId;
    });

    if (indexTransaction === -1) {
      return undefined;
    }

    this.repository[index].transactions.splice(indexTransaction, 1);
    return this.repository[index];
  }

  updateTransaction(id: string, transactionId: string, item: { title: string, value: number, type: TypeTransaction }): Transaction {
    const index = this.repository.findIndex((user) => user.id === id);
    const indexTransaction = this.repository[index].transactions.findIndex((t) => {
      return t.id === transactionId;
    })

    this.repository[index].transactions[indexTransaction].title = item.title;
    this.repository[index].transactions[indexTransaction].value = item.value;
    this.repository[index].transactions[indexTransaction].type = item.type;

    return this.repository[index].transactions[indexTransaction];
  }
}

export { UserRepository };

