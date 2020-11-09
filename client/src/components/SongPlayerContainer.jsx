import React, { useState } from 'react';

function SongPlayer({ nextSong, getNextSong }) {

  // const [video, setVideo] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoSrc, setVideoSrc] = useState('');

  return (
    <div>
      <div className="container-song-player">
        <div className="song-player">
          <div className="embed-responsive">
            <iframe src={`https://open.spotify.com/embed/track/${nextSong.uri.slice(14)}`}width="600" height="760" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div className="song-player-details">
            {/* <h3>{nextSong.snippet.title}</h3>
            <div>{nextSong.snippet.description}</div> */}
            {/* <div>Song Title: {nextSong.name}</div>
            <div>Song OPEN: {nextSong['external_urls']['spotify']}</div>
            <div>Song src: {nextSong['linked_from']['href']}</div>
          <div>Song uri: {nextSong.uri.slice(14)}</div> */}
          </div>

        </div >
          <div className='next-song-btn'>
            <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn' id='song-btn' onClick={() => getNextSong()}><i class="material-icons">arrow_forward</i></button>
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

export default SongPlayer;