import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  //Receber o token
  const authToken = request.headers.authorization;

  //validar se token esta preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    //validar se token é valido
    const {sub} = verify(token, "f73a61761bf145e6ec665af499590947") as Ipayload;

    //recuperar informações do usuário
    request.user_id = sub;

    return next();
  }catch(err) {
    return response.status(401).end();
  }
}
