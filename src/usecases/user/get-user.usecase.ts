import { UserRepository } from "../../repositories/user/user.repository";

export type UserResponse = {
  id: string;
  name: string;
  age: number;
  cpf: string;
  email: string;
}

interface IGetUserResponseDTO {
  status: string;
  user: UserResponse;
}

class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(id: string): IGetUserResponseDTO {
    const userFound = this.userRepository.getById(id);

    if (!userFound) {
      throw new Error("Usuário não encontrado pelo ID informado");
    }

    const response: IGetUserResponseDTO = {
      status: "Usuário encontrado com sucesso!",
      user: {
        id: userFound.id,
        name: userFound.name,
        age: userFound.age,
        cpf: userFound.cpf,
        email: userFound.email
      }
    }

    return response;
  }
}

export { GetUserUseCase };

