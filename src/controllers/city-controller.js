const { StatusCodes } = require("http-status-codes");

const { cityService } = require("../services");
const { errorResponse, successResponse } = require("../utils/common");

async function createCity(req, res) {
  try {
    const city = await cityService.createCity({ name: req.body.name });
    successResponse.message = "City created successfully";
    successResponse.data = city;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createCity,
};
