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
import exampleTweetData from '/Users/jacki/Downloads/git_tutorial/work/MVP/database/exampleTweetData.js';
import Header from './Header.jsx';
import NewUser from './NewUser.jsx';
import QuoteContainer from './QuoteContainer.jsx';
import SongPlayerContainer from './SongPlayerContainer.jsx';
import VideoPlayerContainer from './VideoPlayerContainer.jsx';
import TweetContainer from './TweetContainer.jsx';
import Footer from './Footer.jsx';

function App() {

  const [nextQuote, setNextQuote] = useState(exampleQuoteData.quotes[0]);
  const [nextSong, setNextSong] = useState(exampleSongData.items[0].track);
  const [nextVideo, setNextVideo] = useState(exampleVideoData[0]);
  const [nextTweet, setNextTweet] = useState(exampleTweetData);
  const [currentUser, setCurrUser] = useState('');
  const [quoteCount, setQuoteCount] = useState(0);
  const [songCount, setSongCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [tweetCount, setTweetCount] = useState(0);

  const addNewUser = (data) => {
    //console.log('made it to app level, registerNewUser', data);
    axios.post('/api/user', data)
      .then((res) => {
        //console.log(res);
        setCurrUser(data.userName)
      })
      .catch((err) => console.log(err))
  }

  const getNextQuote = () => {
    axios.get('/api/quotes')
      .then((result) => {
        //console.log('client App GET quote result for QUOTE: ', result.data);
        setNextQuote(result.data.quotes[quoteCount]);
        setQuoteCount(quoteCount + 1);
      })
      .catch((err) => console.log(err))
  }

  const getNextSong = () => {
    axios.get('/song')
      .then((result) => {
        //console.log('client App GET song result for SONG: ', result.data.items[1].track);
        setNextSong(result.data.items[songCount].track);
        setSongCount(songCount + 1);
      })
      .catch((err) => console.log(err))
  }

  const getNextVideo = () => {
    //axios GET req for youtube video
    axios.get('/video')
      .then((result) => {
        //console.log('client App GET video result for VIDEO: ', result.data.items);
        setNextVideo(result.data.items[videoCount]);
        setVideoCount(videoCount + 1);
      })
      .catch((err) => console.log(err))
  }

  const getNextTweet = () => {
    setTweetCount(tweetCount + 1);
    //console.log('HERE in App level to make Axios req for TWEETS')
    axios.get('/api/tweets')
      .then((result) => {
        //console.log('client App GET tweet result for TWEET: ', result.data);
        setNextTweet(result.data);
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='homepage' id='home'>
      <div className='header'>
        <Header />
        <div className='container-new-user'>
          <NewUser
            addNewUser={addNewUser}
            currentUser={currentUser}
          />
        </div>
      </div>
      <br />

      <div className='container intro'>
        <div className='title'>
          <h1></h1>
          <h2>HEY BEAUTIFUL!</h2>
          <h1>Need some<br/>MOTIVATION<br/>to get you pumped up?!</h1>
        </div>
        <div>
          <button className="btn-floating btn-large pulse" type='button' id='start-btn'>Motivate Me!</button>
        </div>
      </div>

      <div className='categories'>
        <div className='container category-quote' id="quotes">
          <QuoteContainer
            nextQuote={nextQuote}
            getNextQuote={getNextQuote}
          />
        </div>
        <div className='container category-song' id="songs">
          <SongPlayerContainer
            nextSong={nextSong}
            getNextSong={getNextSong}
          />
        </div>
        <div className='container category-video' id="videos">
          <VideoPlayerContainer
            nextVideo={nextVideo}
            getNextVideo={getNextVideo}
          />
        </div>
        <div className='container category-social' id="social">
          <TweetContainer
            nextTweet={nextTweet}
            getNextTweet={getNextTweet}
            count={tweetCount}
          />
        </div>
      </div>

      <div className='extra'>
        <Footer />
      </div>
    </div>
  )
}

export default App;