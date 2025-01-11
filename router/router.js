const express = require("express");

// controllers
const { getCurrencies } = require("../controllers/getCurrencies.js");

// creating handler routes
const router = express.Router();

// Configuration
const { routes } = require("../config.js");

// setting API
router.get("/", (request, response) => response.send("Hello, there..."));
router.get(routes.GET_ALL_ROUTE, getCurrencies);

module.exports = { router };
