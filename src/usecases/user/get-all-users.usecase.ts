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
  public execute(data: IGetAllUsersRequestDTO): IGetAllUsersResponseDTO {
    const userRepository = new UserRepository();
    
    let usersFiltered: UserResponse[];

    if (data.name) {
      usersFiltered = userRepository.getBy("_name", data.name).map((user) => {
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
      usersFiltered = userRepository.getBy("_email", data.email).map((user) => {
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
      usersFiltered = userRepository.getBy("_cpf", data.cpf).map((user) => {
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

    usersFiltered = userRepository.getAll();

    return {
      status: "Usuário(s) encontrado(s) com sucesso.",
      users: usersFiltered
    }
  }
}

export { GetAllUsersUseCase };

