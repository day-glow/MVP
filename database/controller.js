const db = require('./model.js');
//const User = db.user;
const { User } = require('./model.js')

/*
===============================
For Users
===============================
*/

//create new user
exports.create = (req, res) => {
  if (!req.body.userName) {
    res.status(400).send({message: "Content cannot be empty!"})
    return;
  }

  const newUser = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    user_name: req.body.userName,
  };

  User.create(newUser)
    .then(data => {
      console.log('success', data)
      res.send(data);
    })
    .catch(err => {
      //console.log('ERROR', err)
      res.status(500).send(err)
    });
};
//find all like's for one user
exports.findAll = (req, res) => {

};
//update user profile (first_name, last_name, username)
exports.update = (req, res) => {

};
//delete user profile
exports.delete = (req, res) => {

};