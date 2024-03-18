const express = require("express");

const { createFlight, getFlights } = require("../../controllers");
const { flightMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/", flightMiddlewares.validateCreateRequest, createFlight);
router.get("/", getFlights);

module.exports = router;
