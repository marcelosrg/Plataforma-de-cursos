import { Favorite } from "../models"
export const favoriteService = {
	create: async (userId: number, courseId: number) => {
    const favorite = await Favorite.create({
      userId,
      courseId
    })

    return favorite
  },
}