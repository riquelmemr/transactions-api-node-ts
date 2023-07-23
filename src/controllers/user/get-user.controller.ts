import { Request, Response } from "express";
import { userRepository } from "../..";
import { GetUserUseCase } from "../../usecases/user/get-user.usecase";

class GetUserController {
  public execute(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const getUserUseCase = new GetUserUseCase(userRepository);
      const response = getUserUseCase.execute(id);
  
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message
      })
    }
  }
}

export { GetUserController };

