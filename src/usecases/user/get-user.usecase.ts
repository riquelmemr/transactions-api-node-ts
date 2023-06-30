import { UserRepository } from "../../repositories/user.repository";

export type UserResponse = {
  id: string;
  name: string;
  age: number;
  cpf: string;
  email: string;
}

interface IGetUserResponseDTO {
  status: string;
  user?: UserResponse;
}

class GetUserUseCase {
  public execute(id: string): IGetUserResponseDTO {
    const userRepository = new UserRepository();
    
    const userFound = userRepository.getById(id);

    if (!userFound) {
      const response: IGetUserResponseDTO = {
        status: "Usuário não encontrado."
      }

      return response;
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

