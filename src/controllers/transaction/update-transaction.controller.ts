import { Request, Response } from "express";
import { userRepository } from "../..";
import { IUpdateTransactionRequestDTO, UpdateTransactionUseCase } from "../../usecases/transaction/update-transaction.usecase";

class UpdateTransactionController {
  execute(req: Request, res: Response) {
    try {
      const { userId, id } = req.params;
      const data: IUpdateTransactionRequestDTO = req.body;
  
      const updateTransactionUseCase = new UpdateTransactionUseCase(userRepository);
      const response = updateTransactionUseCase.execute(userId, id, data);
  
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message
      });
    }
  }
}

export { UpdateTransactionController };
