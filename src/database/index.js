import Sequelize from 'sequelize';
import User from '../app/models/User';
import dataBaseConfig from '../config/database';

const models = [User];

class Database {
  contructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.forEach((model) => model.init());
  }
}

export default new Database();
