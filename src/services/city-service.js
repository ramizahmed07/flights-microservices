const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app-error");
const { cityRepository } = require("../repositories");

async function getCities() {
  try {
    const cities = await cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      "Error occurred while fetching cities",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(id) {
  try {
    const city = await cityRepository.get(id);
    return city;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND)
      throw new AppError("City not found", error.statusCode);

    throw new AppError(
      "Error occurred while fetching city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Error while creating city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteCity(id) {
  try {
    const response = await cityRepository.delete(id);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND)
      throw new AppError("City not found", error.statusCode);
    throw new AppError(
      "Error occurred while deleting city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function updateCity(id, data) {
  try {
    const response = await cityRepository.update(id, data);
    return response;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND)
      throw new AppError("City not found", error.statusCode);
    throw new AppError(
      "Error occurred while updating city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  getCities,
  getCity,
  createCity,
  deleteCity,
  updateCity,
};
