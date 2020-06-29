import Sequelize from 'sequelize';
import mongoose from 'mongoose';
import File from '../app/models/File';
import User from '../app/models/User';
import dataBaseConfig from '../config/database';

const models = [User, File];

class Database {
  contructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
      }
    );
  }
}

export default new Database();
