import { Request, Response } from "express";
import { userRepository } from "../..";
import { GetTransactionUseCase } from "../../usecases/transaction/get-transaction.usecase";

class GetTransactionController {
  execute(req: Request, res: Response) {
    try {
      const { userId, id } = req.params;
      const getTransactionUseCase = new GetTransactionUseCase(userRepository);
      const response = getTransactionUseCase.execute({
        userId, id
      });
  
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message
      });
    }
  }
}

export { GetTransactionController };
