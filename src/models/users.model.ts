import dbConfig from '../config/db';
import { DataTypes } from 'sequelize';

// Creates the User model
const UserModel = dbConfig.sq.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

UserModel.sync({ alter: true }).then(() => {
  console.log('USER MODEL SYNCED');
});

export default UserModel;
