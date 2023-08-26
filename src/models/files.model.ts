import dbConfig from '../config/db';
import { DataTypes } from 'sequelize';

const FileModel = dbConfig.sq.define('files', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  file_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
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
});

FileModel.sync({ alter: true }).then(() => {
  console.log('FILE MODEL SYNCED');
});

export default FileModel;
