import { UserRepository } from "../../repositories/user.repository";
import { UserResponse } from "./get-user.usecase";

interface IUpdateUserResponseDTO {
  user: UserResponse;
  status: string;
}

class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(id: string): IUpdateUserResponseDTO {
    const user = this.userRepository.getById(id);

    if (!user) {
      throw new Error("Usuário não encontrado pelo ID informado.");
    }

    this.userRepository.delete(id);

    return {
      user,
      status: "Usuário deletado com sucesso!",
    }
  }
}

export { DeleteUserUseCase };

