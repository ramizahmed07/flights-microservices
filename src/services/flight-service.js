const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app-error");
const { flightRepository } = require("../repositories");

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Error occurred while creating flight",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createFlight };
