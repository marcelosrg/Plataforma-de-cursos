import { Request, Response } from "express";
import { userServices } from "../services/userServices";

export const authUserConstroller = {
  //POST /auth/register
  register: async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, birth, phone } = req.body;

    try {
      const userAlreadyExists = await userServices.findByEmail(email);

      if (userAlreadyExists) {
        throw new Error("Este email já está cadastrado.");
      }

      const user = await userServices.create({
        firstName,
        lastName,
        birth,
        phone,
        email,
        password,
        role:"user"
      });

      return res.status(201).json(user);

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
