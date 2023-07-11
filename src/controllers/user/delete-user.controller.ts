import { Request, Response } from "express";
import { userRepository } from "../../repositories/user.repository";
import { DeleteUserUseCase } from "../../usecases/user/delete-user.usecase";

class DeleteUserController {
  public execute(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const deleteUserUseCase = new DeleteUserUseCase(userRepository);
      const response = deleteUserUseCase.execute(id);
  
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message
      })
    }
  }
}

export { DeleteUserController };

