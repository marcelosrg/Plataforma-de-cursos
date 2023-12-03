import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userServices } from "../services/userServices";

export const usersConstroller = {
  //GET /users/current/watching

  watching: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!

    try {
      const watching = await userServices.getKeepWatchingList(id)
      return res.json(watching)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  //GET /users/account
  show: async( req: AuthenticatedRequest, res: Response) => {
    const currentUser = req.user!

    try {
      return res.json(currentUser)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
};