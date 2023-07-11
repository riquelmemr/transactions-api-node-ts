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
    let usersFiltered: UserResponse[];

    if (data.name) {
      usersFiltered = this.userRepository.getBy("_name", data.name).map((user) => {
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

    if (data.email) {
      usersFiltered = this.userRepository.getBy("_email", data.email).map((user) => {
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

    if (data.cpf) {
      usersFiltered = this.userRepository.getBy("_cpf", data.cpf).map((user) => {
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

