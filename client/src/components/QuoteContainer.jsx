//https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page

import React, { useState } from 'react';

function QuoteContainer({ nextQuote, getNextQuote}) {

  // const [video, setVideo] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoSrc, setVideoSrc] = useState('');

  return (
    <div>

      <div className="container-quote">Quote Loading, Please Wait...</div>
      <br />
      <div className="quote-box">
        <div className="quote-details">
          <div>{nextQuote.body}</div>
          <h3>By: {nextQuote.author}</h3>
        </div>
      </div>
      <div>
        <button type='button' className='next-btn' id='quote-btn' onClick={() => getNextQuote()}>NEXT QUOTE</button>
      </div>

    </div>
  )
}

export default QuoteContainer;