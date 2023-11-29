import express  from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authUserConstroller } from "./controllers/authUserController";
import { ensureAuth } from "./middlewares/auth";

const router = express.Router()

router.post('/auth/register', authUserConstroller.register)
router.post('/auth/login', authUserConstroller.login)

router.get('/categories',ensureAuth, categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)

router.get('/courses/featured', ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)

router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/couses/:id', ensureAuth, coursesController.show)

router.get('/episodes/stream', ensureAuth, episodesController.stream)


export {router}