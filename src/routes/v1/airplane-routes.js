const express = require("express");

const {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
} = require("../../controllers");
const { airplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/", airplaneMiddlewares.validateCreateRequest, createAirplane);

router.get("/", getAirplanes);

router.get("/:id", getAirplane);

router.delete("/:id", deleteAirplane);

router.put("/:id", updateAirplane);

module.exports = router;
