
import { Category } from './Category'
import { Course } from './Courses'
import { Episode } from './Episode'
import { Favorite } from './Favorite'
import { User } from './Users'

Category.hasMany(Course, {as: 'course'})

Course.belongsTo(Category)
Course.hasMany(Episode, {as: 'episode'})
Course.belongsToMany(User, { through: Favorite })
Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' })

Episode.belongsTo(Course)

Favorite.belongsTo(Course)
Favorite.belongsTo(User)

User.belongsToMany(Course, { through: Favorite })
User.hasMany(Favorite, { as: 'favoritesCourses', foreignKey: 'user_id' })

export {
  Category,
  Course,
  Episode,
	Favorite,
  User
}