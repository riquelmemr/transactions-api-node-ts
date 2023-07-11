import User from "../entities/user.class";
import { IUpdateUserRequestDTO } from "../usecases/user/update-user.usecase";

interface IUserRepository {
  getOne(cpf: string): User | undefined;
  getById(id: string): User | undefined;
  getAll(): User[];
  getBy(key: string, value: string): User[];
  create(user: User): void;
  update(id: string, data: IUpdateUserRequestDTO): void;
  delete(id: string): void;
}

export default IUserRepository;