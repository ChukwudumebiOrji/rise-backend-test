const Sequelize = require('sequelize');

const db = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

const FileModel = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default FileModel;
