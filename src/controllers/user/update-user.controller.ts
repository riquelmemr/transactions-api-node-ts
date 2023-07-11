import { Request, Response } from 'express';
import { userRepository } from '../../repositories/user.repository';
import { IUpdateUserRequestDTO, UpdateUserUseCase } from '../../usecases/user/update-user.usecase';

class UpdateUserController {
  public execute(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: IUpdateUserRequestDTO = req.body;
      
      const updateUserUseCase = new UpdateUserUseCase(userRepository);
      const response = updateUserUseCase.execute(id, data);
  
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message
      })
    }
  }
}

export { UpdateUserController };

