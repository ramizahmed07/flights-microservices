const { StatusCodes } = require("http-status-codes");

const { createAirplane: createAirplaneService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await createAirplaneService({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    successResponse.message = "Airplane created successfully";
    successResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuCode).json(errorResponse);
  }
}

module.exports = {
  createAirplane,
};
