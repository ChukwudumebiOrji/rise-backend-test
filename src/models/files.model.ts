import dbConfig from '../config/db';
import { DataTypes } from 'sequelize';

// Creates the File model
const FileModel = dbConfig.sq.define('files', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_unsafe: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

FileModel.sync({ alter: true }).then(() => {
  console.log('FILE MODEL SYNCED');
});

export default FileModel;
