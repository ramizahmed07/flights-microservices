const { City } = require("../models");
const { CrudRepository } = require("./crud-repository");

class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }
}

const cityRepository = new CityRepository();

module.exports = { cityRepository };
