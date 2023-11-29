import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

import { jwtService } from "../services/jwtService";
import { userServices } from "../services/userServices";
import { UserInstance } from "../models/Users";

export interface AuthenticatedRequest extends Request {
  user?: UserInstance | null;
}

export function ensureAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res
      .status(401)
      .json({ message: "Não autorizado: nenhum token encontrado" });
  }

  const token = authorizationHeader.replace(/Bearer /, "");

  jwtService.verifyToken(token,async (err, decoded) => {
    if (err || typeof decoded === "undefined") {
      return res
        .status(401)
        .json({ message: "Não autorizado: token inválido" });
    }

    const user = await userServices.findByEmail((decoded as JwtPayload).email)
      req.user = user;
      next();
  });
}

export function ensureAuthViaQuery(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { token } = req.query;

  if (!token)
    return res
      .status(401)
      .json({ message: "Não autorizado: nenhum token encontrado" });

  if (typeof token !== "string")
    return res
      .status(400)
      .json({ message: "O parâmetro do token deve ser do tipo string" });

  jwtService.verifyToken(token, async (err, decoded) => {
    if (err || typeof decoded === "undefined")
      return res
        .status(401)
        .json({ message: "Não autorizado: Token inválido" });

    const user = await userServices.findByEmail((decoded as JwtPayload).email);
    req.user = user
    next()

  });
}
