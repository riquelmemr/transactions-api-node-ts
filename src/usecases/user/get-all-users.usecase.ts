import { UserRepository } from "../../repositories/user.repository";
import { UserResponse } from "./get-user.usecase";

export interface IGetAllUsersRequestDTO {
  name?: string;
  email?: string;
  cpf?: string;
}

interface IGetAllUsersResponseDTO {
  status: string;
  users: UserResponse[];
}

class GetAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  public execute(data: IGetAllUsersRequestDTO): IGetAllUsersResponseDTO {
    const { name, email, cpf } = data;
    let usersFiltered: UserResponse[];

    if (name) {
      usersFiltered = this.userRepository.getBy("_name", name).map((user) => {
        return {
          id: user.id,
          name: user.name,
          age: user.age,
          cpf: user.cpf,
          email: user.email
        }
      });

      return {
        status: "Usuário(s) filtrados pelo nome e encontrado(s) com sucesso.",
        users: usersFiltered,
      }
    }

    if (email) {
      usersFiltered = this.userRepository.getBy("_email", email).map((user) => {
        return {
          id: user.id,
          name: user.name,
          age: user.age,
          cpf: user.cpf,
          email: user.email
        }
      });

      return {
        status: "Usuário(s) filtrados pelo email e encontrado(s) com sucesso.",
        users: usersFiltered
      }
    }

    if (cpf) {
      usersFiltered = this.userRepository.getBy("_cpf", cpf).map((user) => {
        return {
          id: user.id,
          name: user.name,
          age: user.age,
          cpf: user.cpf,
          email: user.email
        }
      });

      return {
        status: "Usuário(s) filtrados pelo cpf e encontrado(s) com sucesso.",
        users: usersFiltered
      }
    }

    usersFiltered = this.userRepository.getAll();

    return {
      status: "Usuário(s) encontrado(s) com sucesso.",
      users: usersFiltered
    }
  }
}

export { GetAllUsersUseCase };

