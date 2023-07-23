import { users } from "../../database";
import User from "../../entities/user.entity";
import { BaseRepository } from "../base.repository";

class UserRepository extends BaseRepository<User>{
  constructor() {
    super(users);
  }
}

export { UserRepository };

