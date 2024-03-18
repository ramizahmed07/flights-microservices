const { StatusCodes } = require("http-status-codes");

const AppError = require("../utils/errors/app-error");
const { errorResponse } = require("../utils/common");

function validateCreateRequest(req, res, next) {
  if (!req.body.name) {
    errorResponse.message = "Error occurred while creating airport";
    errorResponse.error = new AppError(
      ["Name not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.code) {
    errorResponse.message = "Error occurred while creating airport";
    errorResponse.error = new AppError(
      ["Code not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  if (!req.body.cityId) {
    errorResponse.message = "Error occurred while creating airport";
    errorResponse.error = new AppError(
      ["City Id not found"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }

  next();
}

module.exports = { validateCreateRequest };
