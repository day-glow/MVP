import React, { useState } from 'react';

// var VideoPlayer = ({video}) => (
//   !video
//     ? <div className="video-player">Please wait...</div>
    // : <div className="video-player">
    //   <div className="embed-responsive embed-responsive-16by9">
    //     <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    //   </div>
    //   <div className="video-player-details">
    //     <h3>{video.snippet.title}</h3>
    //     <div>{video.snippet.description}</div>
    //   </div>
    // </div>
// );

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
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${nextVideo.id.videoId}`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{nextVideo.snippet.title}</h3>
          <div>{nextVideo.snippet.description}</div>
        </div>
      </div>
      <div>
        <button type='button' id='next-btn' onClick={() => getNextVideo()}>NEXT VIDEO</button>
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