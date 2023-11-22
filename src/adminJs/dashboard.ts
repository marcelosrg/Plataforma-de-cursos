import AdminJS, { PageHandler } from "adminjs";
import { Category, Course, Episode, User } from "../models";

export const dashboardOptions: {
  handler?: PageHandler;
  component?: string;
} = {
  component: AdminJS.bundle("./components/Dashboard"),

  handler: async (req, res, context) => {
    const courses = await Course.count();
    const episode = await Episode.count();
    const category = await Category.count();
    const standardUsers = await User.count({ where: { role: "role" } });

    res.json({
      Cursos: courses,
      Epsidios: episode,
      Categorias: category,
      Usuarios: standardUsers,
    });
  },
};
