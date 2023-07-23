import { UserRepository } from "../../repositories/user/user.repository";
import { UserResponse } from "./get-user.usecase";

interface IUpdateUserRequestDTO {
  name?: string;
  age?: number;
  cpf?: string;
  email?: string;
}

interface IUpdateUserResponseDTO {
  user: UserResponse;
  status: string;
}

class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(
    id: string,
    data: IUpdateUserRequestDTO
  ): IUpdateUserResponseDTO {
    const user = this.userRepository.getById(id);

    if (!user) {
      throw new Error("Usuário não encontrado pelo ID informado");
    }

    this.userRepository.update(id, {
      name: data.name || user.name,
      age: data.age || user.age,
      cpf: data.cpf || user.cpf,
      email: data.email || user.email
    });

    return {
      user: user,
      status: "Usuário atualizado com sucesso!",
    };
  }
}

export { IUpdateUserRequestDTO, UpdateUserUseCase };

