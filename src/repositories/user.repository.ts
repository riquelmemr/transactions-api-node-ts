import { users } from "../database";
import User from "../entities/user.class";
import { IUpdateUserRequestDTO } from "../usecases/user/update-user.usecase";
import IUserRepository from "./user.interface";

class UserRepository implements IUserRepository {
  // Aqui vai todos os métodos de CRUD
  public getOne(cpf: string): User | undefined {
    const userFound = users.find((user) => {
      return user.cpf == cpf
    })

    return userFound;
  }

  public getById(id: string): User | undefined {
    const userFound = users.find((user) => {
      return user.id === id;
    })

    return userFound;
  }

  public getAll(): User[] {
    return users;
  }

  public getBy(key: string, value: string): User[] {
    const usersFiltered = users.filter((user) => {
      return user[key as keyof User] == value;
    })

    return usersFiltered;
  }

  public create(user: User) {
    users.push(user);
  }

  public update(id: string, data: IUpdateUserRequestDTO) {
    const indexUser = users.findIndex((user) => {
      return user.id == id;
    })

    users[indexUser].name = data.name || users[indexUser].name;
    users[indexUser].age = data.age || users[indexUser].age;
    users[indexUser].cpf = data.cpf || users[indexUser].cpf;
    users[indexUser].email = data.email || users[indexUser].email;
  }

  delete(id: string) {
    const indexUser = users.findIndex((user) => {
      return user.id == id;
    })

    users.splice(indexUser, 1);
  }
}

const userRepository = new UserRepository();

export { UserRepository, userRepository };

