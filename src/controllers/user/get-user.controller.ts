import { Request, Response } from "express";
import { GetUserUseCase } from "../../usecases/user/get-user.usecase";

class GetUserController {
  public execute(req: Request, res: Response) {
    const { id } = req.params;

    const getUserUseCase = new GetUserUseCase();
    const response = getUserUseCase.execute(id);

    if (!response.user) {
      return res.status(400).json(response);
    }

    return res.status(200).json(response);
  }
}

export { GetUserController };

