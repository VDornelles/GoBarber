import { Sequelize, Model, DataTypes } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

import dataBaseConfig from '../../config/database';

import User from './User';

const sequelize = new Sequelize(dataBaseConfig);

class Appointment extends Model {}

Appointment.init(
  {
    date: DataTypes.DATE,
    canceled_at: DataTypes.DATE,
    past: {
      type: DataTypes.VIRTUAL,
      get() {
        return isBefore(this.date, new Date());
      },
    },
    cancelable: {
      type: DataTypes.VIRTUAL,
      get() {
        return isBefore(new Date(), subHours(this.date, 2));
      },
    },
  },
  {
    sequelize,
  }
);

// Uses the id from file table as a foreign key on Appointment table
Appointment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Appointment.belongsTo(User, { foreignKey: 'provider_id', as: 'provider' });

export default Appointment;
