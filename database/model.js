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

module.exports = { User };

// `sequelize.define` also returns the model
//console.log(User === sequelize.models.User); // true
