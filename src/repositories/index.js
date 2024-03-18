const { airplaneRepository } = require("./airplane-repository");
const { airportRepository } = require("./airport-repository");
const { cityRepository } = require("./city-repository");
const { flightRepository } = require("./flight-repository");

module.exports = {
  airplaneRepository,
  cityRepository,
  airportRepository,
  flightRepository,
};
