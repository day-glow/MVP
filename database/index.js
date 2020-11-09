const mysql = require('mysql');
const Sequelize = require('sequelize');

//placeholder info
const sequelize = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'MotivateMeNOW'
});

sequelize.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected to mySQL MotivateMeNOW database!');
  }
});

const db = { sequelize };

//db.Sequelize = Sequelize;
//db.sequelize = sequelize;

//db.user = require('./model.js')(sequelize, Sequelize);

module.exports = db;