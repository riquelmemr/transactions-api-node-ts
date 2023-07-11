import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories/user.repository";

function verifyUpdateUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const user = userRepository.getById(id);

  if (!user) {
    return res.status(400).json({
      status: "Usuário não encontrado.",
    });
  }

  const { name, age, cpf } = req.body;

  if (!name || !age || !cpf) {
    return res.status(400).json({
      status: "Dados inválidos. Preencha todos os campos!",
    });
  }

  const cleanCPF = cpf.replaceAll(".", "").replace("-", "");

  if (cleanCPF.length !== 11) {
    return res.status(400).json({
      status: "CPF inválido. Tente novamente!",
    });
  }
}
