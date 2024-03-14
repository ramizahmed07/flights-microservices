const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app-error");
const { airplaneRepository } = require("../repositories");

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Error occurred while creating airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Error occurred while fetching airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode === StatusCodes.NOT_FOUND)
      throw new AppError("Airplane not found", error.statusCode);

    throw new AppError(
      "Error occurred while fetching airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createAirplane, getAirplanes, getAirplane };
