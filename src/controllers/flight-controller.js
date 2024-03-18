const { StatusCodes } = require("http-status-codes");

const { flightService } = require("../services");
const { successResponse, errorResponse } = require("../utils/common");

async function createFlight(req, res) {
  try {
    const flight = await flightService.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    successResponse.message = "Flight created successfully";
    successResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(error.statuCode).json(errorResponse);
  }
}

module.exports = {
  createFlight,
};
