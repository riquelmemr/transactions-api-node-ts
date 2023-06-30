import { NextFunction, Request, Response } from "express";

function verify(request: Request, response: Response, next: NextFunction) {
  const { name, email, age, cpf } = request.body;

  if (!name || !email || !age || !cpf) {
    return response.status(400).json({
      status: "Dados inválidos. Preencha todos os campos!"
    });
  }

  const cleanCPF = cpf.replaceAll('.', '').replace('-', '');

  if (cleanCPF.length !== 11) {
    return response.status(400).json({
      status: "CPF Inválido. Tente novamente!"
    })
  }

  next();
}

export default verify;