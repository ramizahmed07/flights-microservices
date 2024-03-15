const express = require("express");

const {
  createCity,
  deleteCity,
  getCities,
  getCity,
  updateCity,
} = require("../../controllers");
const { cityMiddlewares } = require("../../middlewares");

const router = express.Router();

router.get("/", getCities);

router.get("/:id", getCity);

router.post("/", cityMiddlewares.validateCreateRequest, createCity);

router.delete("/:id", deleteCity);

router.put("/:id", updateCity);

module.exports = router;
