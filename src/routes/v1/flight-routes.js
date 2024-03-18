const express = require("express");

const { createFlight } = require("../../controllers");
const { flightMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/", flightMiddlewares.validateCreateRequest, createFlight);

module.exports = router;
