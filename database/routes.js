const user = require('./controller.js');

module.exports = (app) => {
  const router = require('express').Router();

  //create a new user
  router.post('/', user.create);

  //create a new content record



  app.use('/api/user', router);
};
