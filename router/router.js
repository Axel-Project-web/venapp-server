import express from "express";

// controllers
import { getCurrencies } from "../controllers/getCurrencies.js";

// creating handler routes
const router = express.Router();

// Configuration
import { routes } from "../config.js";

// setting API
router.get(routes.GET_ALL_ROUTE, getCurrencies);

export { router };
