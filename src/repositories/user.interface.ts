import User from "../entities/user.class";

interface IUserRepository {
  getOne(cpf: string): User | undefined;
  getById(id: string): User | undefined;
  getAll(): User[];
  getBy(key: string, value: string): User[];
  create(user: User): void;
}

export default IUserRepository;