import { Request, Response } from "express";
import { userRepository } from "../..";
import { GetAllTransactionsUseCase, IGetAllTransactionsRequestParamsDTO } from "../../usecases/transaction/get-all-transactions.usecase";

class GetAllTransactionsController {
  execute(req: Request, res: Response) {
    const { userId } = req.params;
    const data: IGetAllTransactionsRequestParamsDTO = req.query;

    const getAllTransactionsUseCase = new GetAllTransactionsUseCase(
      userRepository
    )
    const response = getAllTransactionsUseCase.execute(userId, data);

    return res.status(200).json(response);
  }
}

export { GetAllTransactionsController };

