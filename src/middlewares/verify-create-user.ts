import { NextFunction, Request, Response } from "express";

function verifyCreateUser(req: Request, res: Response, next: NextFunction) {
  const { name, email, age, cpf } = req.body;

  if (!name || !email || !age || !cpf) {
    return res.status(400).json({
      status: "Dados inválidos. Preencha todos os campos!"
    });
  }

  const cleanCPF = cpf.replaceAll('.', '').replace('-', '');

  if (cleanCPF.length !== 11) {
    return res.status(400).json({
      status: "CPF Inválido. Tente novamente!"
    })
  }

  next();
}

export { verifyCreateUser };

