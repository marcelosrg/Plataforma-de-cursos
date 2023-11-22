import express  from "express";
import { categoriesController } from "./controllers/categoriesController";

const router = express.Router()

router.get('/categories', categoriesController.index)

router.get('/categorie/:id', categoriesController.show)

export {router}