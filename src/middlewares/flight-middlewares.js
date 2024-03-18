const { StatusCodes } = require("http-status-codes");

const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { compareDateAndTime } = require("../utils/helpers/datetime-helper");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid flightNumber"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.airplaneId) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid airplaneId"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.departureAirportId) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid departureAirportId"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.arrivalAirportId) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid arrivalAirportId"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.arrivalTime) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid arrivalTime"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.departureTime) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid departureTime"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.price) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid price"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.boardingGate) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid boardingGate"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!req.body.totalSeats) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid totalSeats"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  if (!compareDateAndTime(req.body.departureTime, req.body.arrivalTime)) {
    errorResponse.message = "Error occurred while creating flight";
    errorResponse.error = new AppError(
      ["Invalid arrivalTime and departureTime"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  next();
}

module.exports = { validateCreateRequest };
