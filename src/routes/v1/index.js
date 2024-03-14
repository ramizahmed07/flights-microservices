const express = require("express");

const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const { info } = require("../../controllers");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);

router.use("/cities", cityRoutes);

router.get("/info", info);

module.exports = router;
