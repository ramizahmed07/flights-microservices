const express = require("express");

const airplanesRoutes = require("./airplane-routes");
const { info } = require("../../controllers");

const router = express.Router();

router.use("/airplanes", airplanesRoutes);

router.get("/info", info);

module.exports = router;
