const { StatusCodes } = require("http-status-codes");

const { cityService } = require("../services");
const { errorResponse, successResponse } = require("../utils/common");

async function getCities(req, res) {
  try {
    const cities = await cityService.getCities();
    successResponse.data = cities;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function getCity(req, res) {
  try {
    const city = await cityService.getCity(req.params.id);
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

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

async function deleteCity(req, res) {
  try {
    const city = await cityService.deleteCity(req.params.id);
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}

async function updateCity(req, res) {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    successResponse.data = city;
    return res.status(StatusCodes.OK).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statusCode).json(errorResponse);
  }
}
module.exports = {
  getCities,
  getCity,
  createCity,
  deleteCity,
  updateCity,
};
