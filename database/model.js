const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('MotivateMeNOW', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = sequelize.define('User', {
  // Model attributes are defined here
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
  sequelize,
  tableName: 'users',
});

const Content = sequelize.define('Content', {
  // Model attributes are defined here
  text_body: {
    type: DataTypes.STRING,
    allowNull: false
  },
  JSON_body: {
    type: DataTypes.STRING,
    allowNull: false
  },
  source: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize,
  tableName: 'content',
});

module.exports = { User, Content };

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
