import { Request, Response } from 'express';
import { userRepository } from '../../repositories/user.repository';
import { CreateUserUseCase } from "../../usecases/user/create-user.usecase";

class CreateUserController {
  public execute(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;

    const createUserUseCase = new CreateUserUseCase(userRepository);
    const response = createUserUseCase.execute({
      name,
      cpf,
      email,
      age
    })

    if (!response.user) {
      return res.status(400).json(response);
    }

    return res.status(201).json(response);
  }
}

export { CreateUserController };

