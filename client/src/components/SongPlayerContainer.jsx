import React, { useState } from 'react';

function SongPlayer({ nextSong, getNextSong }) {

  // const [video, setVideo] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoSrc, setVideoSrc] = useState('');

  return (
    <div>

      <div className="container-song-player">Song1 Please Wait...</div>

      <div className="song-player">
        <div className="embed-responsive">
          <iframe src={`https://open.spotify.com/embed/track/${nextSong.uri.slice(14)}`}width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="song-player-details">
          {/* <h3>{nextSong.snippet.title}</h3>
          <div>{nextSong.snippet.description}</div> */}
          {/* <div>Song Title: {nextSong.name}</div>
          <div>Song OPEN: {nextSong['external_urls']['spotify']}</div>
          <div>Song src: {nextSong['linked_from']['href']}</div>
          <div>Song uri: {nextSong.uri.slice(14)}</div> */}
        </div>

      </div>
      <div>
        <button type='button' className='next-btn' id='song-btn' onClick={() => {
          console.log('you clicked get Next Song button')
          getNextSong()
        }}>
          NEXT SONG
        </button>
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