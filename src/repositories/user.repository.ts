import { users } from "../database";
import User from "../entities/user.class";
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
}

export { UserRepository };

