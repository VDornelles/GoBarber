import { Sequelize, Model, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';
import dataBaseConfig from '../../config/database';

import File from './File';

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
          // Bcrypt encrypts the password(yarn add bcrypt)
          user.password_hash = await bcrypt.hash(user.password, 8);
        }
      },
    },
    sequelize,
  }
);

// Uses the id from file table as a foreign key on User table
User.belongsTo(File, { foreignKey: 'avatar_id', as: 'avatar' });

export default User;
