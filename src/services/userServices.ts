import { User } from "../models"
import { UserCreationAttributes } from "../models/Users"

export const userServices = {
     findByEmail: async (email: string) => {
          const user = await User.findOne({
               where: {
                    email
               }
          })
          return user
     },

     create: async(attributes: UserCreationAttributes) => {
          const user = await User.create(attributes)
          return user
     }
}

