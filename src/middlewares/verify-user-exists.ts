import { NextFunction, Request, Response } from "express";
import { userRepository } from "..";

function verifyUserAlreadyExists(req: Request, res: Response, next: NextFunction) {
  const { userId } = req.params;

  const user = userRepository.getById(userId);

  if (!user) {
    return res.status(404).json({
      error: "Usuário não encontrado pelo ID informado.",
    });
  }

  next();
}

export { verifyUserAlreadyExists };
