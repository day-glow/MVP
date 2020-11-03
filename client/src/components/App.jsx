// import '../styles/materialize.css';
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/app.css';
import sampleData from '/Users/jacki/Downloads/git_tutorial/work/MVP/database/sampleData.js';
import exampleQuoteData from '/Users/jacki/Downloads/git_tutorial/work/MVP/database/exampleQuoteData.js';
import exampleSongData from '/Users/jacki/Downloads/git_tutorial/work/MVP/database/exampleSongData.js';
import exampleVideoData from '/Users/jacki/Downloads/git_tutorial/work/MVP/database/exampleVideoData.js';
import QuoteContainer from './QuoteContainer.jsx';
import SongPlayerContainer from './SongPlayerContainer.jsx';
import VideoPlayerContainer from './VideoPlayerContainer.jsx';


function App() {

  const [nextQuote, setNextQuote] = useState(exampleQuoteData.quotes[0]);
  const [nextSong, setNextSong] = useState(exampleSongData.items[0].track);
  const [nextVideo, setNextVideo] = useState(exampleVideoData[1]);

  const data = sampleData[1]['title'] || 'data not imported correctly';

  const getNextQuote = () => {
    console.log('HERE in App level to make Axios req')
    //axios GET req for youtube video
    axios.get('/api/quotes')
      //set next video
      .then((result) => {
        console.log('client App GET quote result for QUOTE: ', result.data);
        setNextQuote(result.data.quotes[0]);
      })
      .catch((err) => console.log(err))
      //pass video info to VideoPlayer Container
  }

  const getNextSong = () => {
    //axios GET req for youtube video
    axios.get('/song')
      //set next video
      .then((result) => {
        console.log('client App GET song result for SONG: ', result.data.items[1].track);
        setNextSong(result.data.items[1].track);
      })
      .catch((err) => console.log(err))
      //pass video info to VideoPlayer Container
  }

  const getNextVideo = () => {
    //axios GET req for youtube video
    axios.get('/video')
      //set next video
      .then((result) => {
        console.log('client App GET video result for VIDEO: ', result.data.items[0]);
        setNextVideo(result.data.items[0]);
      })
      .catch((err) => console.log(err))
      //pass video info to VideoPlayer Container
  }

  return (
    <div>
      <div>Nav Bar goes here</div>
        <h1>Hey beautiful, How are you feeling today?</h1>
        <h2>86,400 seconds in a day</h2>
      <div>
        <button type='button' id='start-btn'>Motivate Me</button>
      </div>
      <div>
        <div className='container category-quote'>
          Box1: Quote
          <QuoteContainer
            nextQuote={nextQuote}
            getNextQuote={getNextQuote}
          />
        </div>
        <div className='container category-song'>
          Box2: Song
          <SongPlayerContainer
            nextSong={nextSong}
            getNextSong={getNextSong}
          />
        </div>
        <div className='container category-video'>
          Box3: Video
          <VideoPlayerContainer
            nextVideo={nextVideo}
            getNextVideo={getNextVideo}
          />
        </div>
        <div className='container category-social'>Box4: SocialMedia</div>
      </div>
      <div>
        {data}
      </div>
      <div className='footer'>Share Options</div>
    </div>
  )
}

export default App;