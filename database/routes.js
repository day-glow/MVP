const user = require('./controller.js');
const content = require('./contentController.js');

module.exports = (app) => {
  const router = require('express').Router();

  //create a new user
  router.post('/', user.create);

  //create a new content record
  // router.post('/', content.create);
  //console.log('HERE in router')

  app.use('/api/user', router);
  //app.use('/api/content', router);
};
