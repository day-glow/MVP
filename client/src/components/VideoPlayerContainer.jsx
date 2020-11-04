import React, { useState } from 'react';

function VideoPlayer({ nextVideo, getNextVideo }) {

  // const [video, setVideo] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoSrc, setVideoSrc] = useState('');

  return (
    <div>
      <div className="container-video-player">
        <div className="video-player">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <div className="video-container">
                <iframe width="853" height="480" src={`https://www.youtube.com/embed/${nextVideo.id.videoId}`}  frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{nextVideo.snippet.title}<i className="material-icons right"></i></span>
              <p>more info</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{nextVideo.snippet.channelTitle}<i className="material-icons right">X</i></span>
              <p>{nextVideo.snippet.description}</p>
            </div>
          </div>

        </div>
        <div>
          <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn' id='video-btn' onClick={() => getNextVideo()}><i class="material-icons">arrow_forward</i></button>
          <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn align-right like' id='like-btn' onClick={() => 'addLike()'}><i class="material-icons">favorite_border</i></button>
        </div>
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