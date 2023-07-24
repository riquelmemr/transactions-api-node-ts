import Transaction from '../../entities/transaction.entity';
import { UserRepository } from '../../repositories/user/user.repository';

interface IGetTransactionRequestDTO {
  userId: string;
  id: string;
}

interface IGetTransactionResponseDTO {
  status: string;
  transaction: Transaction;
}

class GetTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(data: IGetTransactionRequestDTO): IGetTransactionResponseDTO {
    const { userId, id } = data;

    const transaction = this.userRepository.getTransaction(userId, id);

    if (!transaction) {
      throw new Error("Transação não encontrada para este usuário!");
    }

    return {
      status: "Transação encontrada com sucesso!",
      transaction,
    }
  }
}

export { GetTransactionUseCase };
