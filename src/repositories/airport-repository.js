const { Airport } = require("../models");
const { CrudRepository } = require("./crud-repository");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }
}

const airportRepository = new AirportRepository();

module.exports = { airportRepository };
