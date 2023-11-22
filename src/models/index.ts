import { Category } from './Category'
import { Course } from './Courses'
import { Episode } from './Episode'
import { User } from './Users'


Category.hasMany(Course)

Course.belongsTo(Category)

Course.hasMany(Episode)

Episode.belongsTo(Course)
export {
  Category,
  Course,
  Episode,
  User
}