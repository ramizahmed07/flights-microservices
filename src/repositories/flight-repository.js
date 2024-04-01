const { Flight, Airplane, Airport, City } = require('../models');
const { CrudRepository } = require('./crud-repository');

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAll(filter, sortFilter) {
    const response = await Flight.findAll({
      where: filter,
      order: sortFilter,
      include: [
        { model: Airplane, required: true, as: 'airplane' },
        { model: Airport, required: true, as: 'departureAirport' },
        {
          model: Airport,
          required: true,
          as: 'arrivalAirport',
        },
      ],
    });
    return response;
  }
}

const flightRepository = new FlightRepository();

module.exports = { flightRepository };
