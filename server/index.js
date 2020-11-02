const express = require('express');
const path = require('path');
const axios = require('axios');
const { YOUTUBE_API_KEY } = require('../client/src/config/youtube_api_key.js');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../public');

app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
  res.send('Hello World! From server/index.js')
})

//GET Youtube Video
app.get('/video', (req, res) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=1&q=motivation`)
  .then((result) => {
    console.log(result.data);
    res.status(200).send(result.data);
  })
  .catch((err) => console.log(err));
})


// app.get('/video',
// 'https://www.googleapis.com/youtube/v3/search', {
//   part: 'snippet',
//   key: YOUTUBE_API_KEY,
//   q: 'motivation',
//   maxResults: 2,
//   type: 'video',
//   videoEmbeddable: 'true'
// })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
