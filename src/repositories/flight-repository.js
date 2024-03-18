const { Flight } = require("../models");
const { CrudRepository } = require("./crud-repository");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }
}

const flightRepository = new FlightRepository();

module.exports = { flightRepository };
