const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");

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

async function getFlights(query) {
  const customFilter = {};
  let sortFilter = [];
  const endingTripTime = "T23:59:59";
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
  }
  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice || 200000],
    };
  }
  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }
  if (query.date) {
    customFilter.departureTime = {
      [Op.between]: [query.date, query.date + endingTripTime],
    };
  }
  if (query.sort) {
    const params = query.sort.split(",");
    params.forEach((param) => {
      const [field, order] = param.split("_");
      if (order === "ASC" || order === "DESC") sortFilter.push([field, order]);
    });
  }
  try {
    const flights = await flightRepository.getAll(customFilter, sortFilter);
    return flights;
  } catch (error) {
    throw new AppError(
      "Error occurred while fetching flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createFlight, getFlights };
