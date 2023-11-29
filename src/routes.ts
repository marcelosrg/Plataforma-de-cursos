import express  from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authUserConstroller } from "./controllers/authUserController";

const router = express.Router()

router.post('/auth/register', authUserConstroller.register)
router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)
router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', coursesController.search)
router.get('/couses/:id', coursesController.show)
router.get('/episodes/stream', episodesController.stream)


export {router}