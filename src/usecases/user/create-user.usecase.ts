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
  constructor(private userRepository: UserRepository) {}

  public execute(data: ICreateUserRequestDTO): ICreateUserResponseDTO {
    const userFound = this.userRepository.getOne(data.cpf);

    if (userFound) {
      const response = {
        status: "Usuário já cadastrado."
      }

      return response;
    }

    const user = new User(data.name, data.age, data.cpf, data.email);
    this.userRepository.create(user);

    const response: ICreateUserResponseDTO = {
      status: "Usuário criado com sucesso!",
      user: user
    }

    return response;
  }
}

export { CreateUserUseCase };

