import { Router } from "express";
import * as PageController from "../controllers/pageController";
import * as SearchController from "../controllers/searchController";

const router = Router();

router.get("/", PageController.home); //created localhost:4000/
router.get("/dogs", PageController.dogs); //created localhost:4000/dogs
router.get("/cats", PageController.cats); //created localhost:4000/cats
router.get("/fishes", PageController.fishes); //created localhost:4000/fishesgi

router.get("/search", SearchController.search); //created localhost:4000/search

export default router;
