import { Category } from "../models";

export const categoriesService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage;

    const { count, rows } = await Category.findAndCountAll({
      attributes: ["id", "name", "position"],
      order: [["position", "ASC"]],
      limit: perPage,
      offset: offset,
    });

    return {
      categories: rows,
      page: page,
      perPage: perPage,
      total: count,
    };
  },

  findByIdWithCourses: async(id:string) => {
    const categoriesWithCourses = await Category.findByPk(id, {
      attributes: ['id', 'name'], 
      include: {
        association: 'courses',
        attributes: [
          'id',
          'name',
          'synopsis',
          'thumbnail_url', 'thumbnailUrl'
        ]
      }
    })

    return categoriesWithCourses
  }
};
