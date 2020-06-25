import { Sequelize, Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import dataBaseConfig from '../../config/database';

const sequelize = new Sequelize(dataBaseConfig);

class User extends Model {
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING,
    provider: DataTypes.BOOLEAN,
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      },
    },
    sequelize,
  }
);

export default User;
