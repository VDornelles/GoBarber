import { Sequelize, Model, DataTypes } from 'sequelize';
import dataBaseConfig from '../../config/database';

const sequelize = new Sequelize(dataBaseConfig);

class File extends Model {}

File.init(
  {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${process.env.APP_URL}/${this.path}`;
      },
    },
  },
  {
    sequelize,
  }
);

export default File;
