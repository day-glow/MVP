import React, { useState } from 'react';

function VideoPlayer({ nextVideo, getNextVideo }) {

  // const [video, setVideo] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoSrc, setVideoSrc] = useState('');

  return (
    <div>

      <div className="container-video-player">Video1 Please Wait...</div>

      <div className="video-player">
        <div className="embed-responsive">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${nextVideo.id.videoId}`} frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{nextVideo.snippet.title}</h3>
          <div>{nextVideo.snippet.description}</div>
        </div>
      </div>
      <div>
        <button type='button' className='next-btn' id='video-btn' onClick={() => getNextVideo()}>NEXT VIDEO</button>
      </div>

    </div>
  )
}


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// VideoPlayer.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

export default VideoPlayer;