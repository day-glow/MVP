import React, { useState } from 'react';

function TweetContainer({ nextTweet, getNextTweet}) {

  // const [video, setVideo] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoSrc, setVideoSrc] = useState('');

  return (
    <div>

      <div className="container-tweet">Tweet Loading, Please Wait...</div>
      <br />
      <div className="tweet-box">
        <div className="tweet-details">
          <div>{nextTweet.data.text}</div>
          <h3>By: {nextTweet.includes.users[0].username}</h3>
        </div>
      </div>
      <div>
        <button type='button' className='next-btn' id='tweet-btn' onClick={() => getNextTweet()}>NEXT TWEET</button>
      </div>

    </div>
  )
}

export default TweetContainer;