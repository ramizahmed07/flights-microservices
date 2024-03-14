const express = require("express");

const {
  createAirplane,
  getAirplanes,
  getAirplane,
} = require("../../controllers");
const { airplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/", airplaneMiddlewares.validateCreateRequest, createAirplane);

router.get("/", getAirplanes);

router.get("/:id", getAirplane);

module.exports = router;
