import dbConfig from '../config/db';
import { DataTypes } from 'sequelize';

const UserModel = dbConfig.sq.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UserModel.sync({ alter: true }).then(() => {
  console.log('User Model synced');
});

export default UserModel;
