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
        <div className="embed-responsive">
        {/* <blockquote className="twitter-tweet" data-lang="en">
          <p lang="en" dir="ltr">just setting up my twttr</p>&mdash; Jack (@jack) <a href="https://twitter.com/jack/status/20">March 21, 2006</a>
        </blockquote> */}
          <a className="twitter-timeline" href="https://twitter.com/TwitterDev/timelines/539487832448843776?ref_src=twsrc%5Etfw">National Park Tweets - Curated tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
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