import Sequelize from 'sequelize';
import File from '../app/models/File';
import User from '../app/models/User';
import dataBaseConfig from '../config/database';

const models = [User, File];

class Database {
  contructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
