const db = require('./model.js');
//const User = db.user;
const { User } = require('./model.js')

/*
===============================
For Content
===============================
*/

//add new content record (POST)
exports.create = (req, res) => {

};

//retrieve all records based on a filter (i.e. category or source)
exports.findAll = (req, res) => {

};

//retrieve one record based on a filter (i.e. API is down and need to fetch content)
exports.findOne = (req, res) => {

};

//update total_likes count for content_id & add user_like record
exports.update = (req, res) => {

};

//low priority, delete a record if uri is broken
exports.delete = (req, res) => {

};


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
      console.log('ERROR', err)
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