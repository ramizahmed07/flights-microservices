const express = require("express");

const { createCity } = require("../../controllers");
const { cityMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/", cityMiddlewares.validateCreateRequest, createCity);

module.exports = router;
