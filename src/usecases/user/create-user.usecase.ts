import User from "../../entities/user.entity";
import { UserRepository } from "../../repositories/user/user.repository";

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
    const { name, email, age, cpf } = data;

    const userFound = this.userRepository.getOne('_cpf', cpf);

    if (userFound) {
      throw new Error("CPF já utilizado! Tente novamente.");
    }

    const user = new User(name, age, cpf, email);
    this.userRepository.create(user);

    const response: ICreateUserResponseDTO = {
      status: "Usuário criado com sucesso!",
      user: user
    }

    return response;
  }
}

export { CreateUserUseCase };

