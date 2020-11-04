const db = require('./model.js');
//const User = db.user;
const { Content } = require('./model.js')

/*
===============================
For Content
===============================
*/

//add new content record (POST)
exports.create = (req, res) => {
  const newContentRecord = {
    // 'text_body': req.body['text_body'],
    // 'JSON_body': req.body['JSON_body'].toString(),
    // 'source': req.body['source'],
    // 'category': req.body['category']
    'text_body': 'text for quotes',
    'JSON_body': 'body obj',
    'source': '1',
    'category': '1'
  }

  console.log('HERE in CONTENTCONTROLLER')
  Content.create(newContentRecord)
    .then(data => {
      console.log('successfully added content', data)
      res.send(data);
    })
    .catch(err => {
      console.log('ERROR', err)
      res.status(500).send(err)
    });
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
