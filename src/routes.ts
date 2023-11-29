import express  from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { courseResourceFeatures } from "./adminJs/resources/course";

const router = express.Router()

router.get('/categories', categoriesController.index)

router.get('/categories/:id', categoriesController.show)

router.get('/courses/featured', coursesController.featured)

router.get('/courses/newest', coursesController.newest)

router.get('/couses/:id', coursesController.show)

export {router}