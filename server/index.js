const express = require('express');
const path = require('path');
const axios = require('axios');
var SpotifyWebApi = require('spotify-web-api-node');

const { FAVQS_API_KEY } = require('../client/src/config/favQs_api_key.js');
const { SPOTIFY_CLIENT_ID, SPOTIFY_SECRET_KEY, SPOTIFY_OAUTH_TOKEN } = require('../client/src/config/spotify_api_key.js');
const { YOUTUBE_API_KEY } = require('../client/src/config/youtube_api_key.js');

const app = express();
const PORT = 3000;
const PUBLIC_DIR = path.resolve(__dirname, '../public');

app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
  res.send('Hello World! From server/index.js')
})

//GET Quote
app.get('/api/quotes', (req, res) => {
  axios.get('https://favqs.com/api/quotes/?&filter=motivational', {
    headers: {
      "Authorization": `Token token=${FAVQS_API_KEY}`
    }
  })
    .then((result) => {
      //console.log(result.data);
      res.status(200).send(result.data);
    })
    .catch((err) => console.log(err));
})

//GET Spotify Song
app.get('/song', (req, res) => {
  console.log('in Server req')
  axios.get('https://api.spotify.com/v1/playlists/4LJ5hkgqt04IKw454SUJqV/tracks?market=US&limit=20', {
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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
