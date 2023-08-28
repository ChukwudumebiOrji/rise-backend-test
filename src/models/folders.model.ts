import dbConfig from '../config/db';
import { DataTypes } from 'sequelize';

// Creates the Folder model
const FolderModel = dbConfig.sq.define('folders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  files: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: false,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
});

FolderModel.sync({ alter: true }).then(() => {
  console.log('FOLDER MODEL SYNCED');
});

export default FolderModel;
