const { logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      logger.error("Error occurred in Crud repo : create");
      throw error;
    }
  }

  async delete(data) {
    try {
      const response = await this.model.delete({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      logger.error("Error occurred in Crud repo : delete");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      logger.error("Error occurred in Crud repo : get");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("Error occurred in Crud repo : getAll");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: { id },
      });
      return response;
    } catch (error) {
      logger.error("Error occurred in Crud repo : update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
