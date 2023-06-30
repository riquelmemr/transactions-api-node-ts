import User from "../../entities/user.class";
import { UserRepository } from "../../repositories/user.repository";

interface ICreateUserRequestDTO {
  name: string;
  email: string;
  age: number;
  cpf: string;
}

interface ICreateUserResponseDTO {
  status: string;
  user?: User;
}

class CreateUserUseCase {
  public execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO {
    // Chamar o repository
    const userRepository = new UserRepository()

    const userFound = userRepository.getOne(data.cpf);

    if (userFound) {
      const response = {
        status: "Usuário já cadastrado."
      }

      return response;
    }

    const user = new User(data.name, data.age, data.cpf, data.email);
    userRepository.create(user);

    const response: ICreateUserResponseDTO = {
      status: "Usuário criado com sucesso!",
      user: user
    }

    return response;
  }
}

export { CreateUserUseCase };

