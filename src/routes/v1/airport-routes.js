const express = require("express");

const {
  createAirport,
  getAirports,
  getAirport,
  deleteAirport,
  updateAirport,
} = require("../../controllers");
const { airportMiddlewares } = require("../../middlewares");

const router = express.Router();

router.get("/", getAirports);

router.get("/:id", getAirport);

router.post("/", airportMiddlewares.validateCreateRequest, createAirport);

router.delete("/:id", deleteAirport);

router.put("/:id", updateAirport);

module.exports = router;
