import { Favorite } from "../models"

export const favoriteService = {
     findyByUserId: async(userId: number) => {
          const favorites = await Favorite.findAll({
               where: {userId: userId},
               include: {
                    association: 'Course',
                    attributes: [
                         'id',
                         'name',
                         'synopsis',
                         ['thumbnail_url', 'thumbnailUrl']
                       ]
               }
          })
          return {
               userId,
               courses: favorites.map(favorite => favorite.Course)
          }
     },


     create: async (userId: string | number, courseId: string | number) => {
          const createFavorite = Favorite.create({
               courseId,
               userId
          })
          return createFavorite
     }

}