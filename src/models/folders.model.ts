import dbConfig from '../config/db';
import { DataTypes } from 'sequelize';

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
});

FolderModel.sync({ alter: true }).then(() => {
  console.log('Folder Model synced');
});

export default FolderModel;
