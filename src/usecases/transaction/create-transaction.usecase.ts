import Transaction, { TypeTransaction } from "../../entities/transaction.entity";
import { UserRepository } from '../../repositories/user/user.repository';

interface ICreateTransactionRequestDTO {
  userId: string;
  title: string;
  value: number;
  type: TypeTransaction;
}

interface ICreateTransactionResponseDTO {
  status: string;
  transaction: Transaction;
}

class CreateTransactionUseCase {
  constructor( 
    private userRepository: UserRepository
  ) {}

  execute(data: ICreateTransactionRequestDTO): ICreateTransactionResponseDTO {
    const { userId, title, value, type } = data;

    const transaction = new Transaction(title, value, type);
    this.userRepository.createTransaction(userId, transaction);

    return {
      status: "Transação criada e adicionada com sucesso!",
      transaction,
    }
  }
}

export { CreateTransactionUseCase, ICreateTransactionRequestDTO, ICreateTransactionResponseDTO };

