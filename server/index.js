const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const db = require('../database/model.js')
// var SpotifyWebApi = require('spotify-web-api-node');

const { FAVQS_API_KEY } = require('../client/src/config/favQs_api_key.js');
const { SPOTIFY_CLIENT_ID, SPOTIFY_SECRET_KEY, SPOTIFY_OAUTH_TOKEN } = require('../client/src/config/spotify_api_key.js');
const { YOUTUBE_API_KEY } = require('../client/src/config/youtube_api_key.js');
const { TWITTER_API_KEY, TWITTER_SECRET_KEY, TWITTER_BEARER_TOKEN } = require('../client/src/config/twitter_api_key.js');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../public');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});
//app.use('/user')

//create new user
// app.post(
//   db.sequelize.sync({force:true})
//     .then(() => {
//       console.log("resync db")
//       db.create({
//         id,
//         first_name: ,
//         last_name: ,
//         user_name:
//       })
// }))


// app.get('/', (req, res) => {
//   res.send('Hello World! From server/index.js')
// })

//GET Quote
app.get('/api/quotes', (req, res) => {
  axios.get('https://favqs.com/api/quotes/?&filter=motivational', {
    headers: {
      "Authorization": `Token token=${FAVQS_API_KEY}`
    }
  })
    .then((result) => {
      //console.log(result.data);
      axios.post('/api/content', {
        'text_body': result.data.quotes[0].body,
        'JSON_body': result.data.quotes[0],
        'source': '1',
        'category': '1'
      })
      res.status(200).send(result.data);
    })

    .catch((err) => console.log(err));
})

//GET Spotify Song
app.get('/song', (req, res) => {
  console.log('in Server req')
  axios.get('https://api.spotify.com/v1/playlists/4LJ5hkgqt04IKw454SUJqV/tracks?market=US&limit=10', {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${SPOTIFY_OAUTH_TOKEN}`
    }
  })
    .then((result) => {
      //console.log(result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
})
//PLAYLIST
//https://api.spotify.com/v1/playlists/{playlist_id}/tracks
//https://open.spotify.com/playlist/4LJ5hkgqt04IKw454SUJqV
//https://open.spotify.com/playlist/37i9dQZF1DXc5e2bJhV6pu

//GET Youtube Video
app.get('/video', (req, res) => {
  axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=1&q=motivation`)
  .then((result) => {
    //console.log(result.data);
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

app.get('/api/tweets', (req, res) => {
  axios.get('https://api.twitter.com/2/tweets/search/recent?query=motivation&expansions=author_id,attachments.media_keys', {
    headers: {
      "Authorization": `Bearer ${TWITTER_BEARER_TOKEN}`
    }
  })
    .then((result) => {
      //console.log(result);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
})

// app.post('/api/user', (req, res) => {
//   console.log('SERVER request BODY: ', req.body)
// })

require('../database/routes.js')(app);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
