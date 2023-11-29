import express  from "express";
import { categoriesController } from "./controllers/categoriesController";
import { cousesController } from "./controllers/coursesController";

const router = express.Router()

router.get('/categories', categoriesController.index)

router.get('/categories/:id', categoriesController.show)

router.get('/courses/featured', cousesController.featured)

router.get('/couses/:id', cousesController.show)

export {router}