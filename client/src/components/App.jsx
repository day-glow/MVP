// import '../styles/materialize.css';
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/app.css';
import sampleData from '/Users/jacki/Downloads/git_tutorial/work/MVP/database/sampleData.js';
import exampleVideoData from '/Users/jacki/Downloads/git_tutorial/work/MVP/database/exampleVideoData.js';
import VideoPlayerContainer from './VideoPlayerContainer.jsx';


function App() {

  const [nextVideo, setNextVideo] = useState(exampleVideoData[1]);

  const data = sampleData[1]['title'] || 'data not imported correctly';
  //console.log(data);



  // useEffect(() => {
  // })
  const getNextVideo = () => {
    //axios GET req for youtube video
    axios.get('/video')
      //set next video
      .then((result) => {
        console.log('client App GET video result: ', result.data.items[0]);
        setNextVideo(result.data.items[0]);
        // setNext(false);
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
        <div className='container category-quote'>Box1: Quote</div>
        <div className='container category-song'>Box2: Song</div>
        <div className='container category-video'>Box3: Video
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