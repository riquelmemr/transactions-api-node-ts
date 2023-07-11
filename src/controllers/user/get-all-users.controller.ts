import { Request, Response } from "express";
import { userRepository } from "../../repositories/user.repository";
import { GetAllUsersUseCase, IGetAllUsersRequestDTO } from "../../usecases/user/get-all-users.usecase";

class GetAllUsersController {
  public execute(req: Request, res: Response) {
    const { name, email, cpf } = req.query;

    const payload: IGetAllUsersRequestDTO = {
      name: !name ? undefined : String(name),
      email: !email ? undefined : String(email),
      cpf: !cpf ? undefined : String(cpf),
    };

    const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
    const response = getAllUsersUseCase.execute(payload);

    return res.status(200).json(response);
  }
}

export { GetAllUsersController };

