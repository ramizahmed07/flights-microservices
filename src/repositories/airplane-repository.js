const { Airplane } = require("../models");
const { CrudRepository } = require("./crud-repository");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

const airplaneRepository = new AirplaneRepository();

module.exports = { airplaneRepository };
