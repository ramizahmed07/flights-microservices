const { Flight } = require("../models");
const { CrudRepository } = require("./crud-repository");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAll(filter, sortFilter) {
    const response = await Flight.findAll({
      where: filter,
      order: sortFilter,
    });
    return response;
  }
}

const flightRepository = new FlightRepository();

module.exports = { flightRepository };
