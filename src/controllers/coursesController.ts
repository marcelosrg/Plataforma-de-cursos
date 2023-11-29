import { Request, Response } from "express";
import { courseService } from "../services/coursesService";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const coursesController = {
  // GET /courses/featured
  featured: async (req: Request, res: Response) => {
    try {
      const featuredCourses = await courseService.getRandomFeaturedCourses();
      return res.json(featuredCourses);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /courses/newest
  newest: async (req: Request, res: Response) => {
    try {
      const newestCourse = await courseService.getToptenNewest();
      return res.json(newestCourse);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /courses/search

  search: async (req: Request, res: Response) => {
    const {name} = req.query
    const [page, perPage] = getPaginationParams(req.query)
    try {
      if(typeof name !== 'string') throw new Error ('o parametro n é uma string')
      const searchCourse = await courseService.findByName(name, page, perPage)
      return res.json(searchCourse);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // GET /course/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const course = await courseService.findByIdWithEpisodes(id);
      return res.json(course);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
