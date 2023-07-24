import User from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user/user.repository';

interface IDeleteTransactionRequestDTO {
  userId: string;
  id: string;
}

interface IDeleteTransactionResponseDTO {
  status: string;
  userUpdated: User;
}

class DeleteTransactionUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(data: IDeleteTransactionRequestDTO): IDeleteTransactionResponseDTO {
    const { userId, id } = data;

    const userUpdated = this.userRepository.deleteTransaction(userId, id);

    if (!userUpdated) {
      throw new Error("Transação não encontrada para este usuário!");
    }

    return {
      status: "Transação deletada com sucesso!",
      userUpdated,
    }
  }
}

export { DeleteTransactionUseCase };

