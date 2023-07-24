import { Request, Response } from "express";
import { userRepository } from "../..";
import { GetAllTransactionsUseCase } from "../../usecases/transaction/get-all-transactions.usecase";

class GetAllTransactionsController {
  execute(req: Request, res: Response) {
    const { userId } = req.params;

    const getAllTransactionsUseCase = new GetAllTransactionsUseCase(
      userRepository
    )
    const response = getAllTransactionsUseCase.execute(userId);

    return res.status(200).json(response);
  }
}

export { GetAllTransactionsController };
