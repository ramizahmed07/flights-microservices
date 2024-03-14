const { StatusCodes } = require("http-status-codes");

const { airplaneService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await airplaneService.createAirplane({
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

async function getAirplanes(req, res) {
  try {
    const airplanes = await airplaneService.getAirplanes();
    successResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function getAirplane(req, res) {
  try {
    const airplane = await airplaneService.getAirplane(req.params.id);
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function deleteAirplane(req, res) {
  try {
    const airplane = await airplaneService.deleteAirplane(req.params.id);
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const airplane = await airplaneService.updateAirplane(
      req.params.id,
      req.body
    );
    successResponse.data = airplane;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  deleteAirplane,
  updateAirplane,
};
