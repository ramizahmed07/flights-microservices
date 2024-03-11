const express = require("express");

const { createAirplane } = require("../../controllers");
const { airplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/", airplaneMiddlewares.validateCreateRequest, createAirplane);

module.exports = router;
