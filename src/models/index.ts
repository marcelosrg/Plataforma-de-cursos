import { Category } from './Category'
import { Course } from './Courses'
import { Episode } from './Episode'
import { User } from './Users'


Category.hasMany(Course, { as: 'courses'}) 

Course.belongsTo(Category)  

Course.hasMany(Episode, {as: 'episodes'})

Episode.belongsTo(Course)
export {
  Category,
  Course,
  Episode,
  User
}