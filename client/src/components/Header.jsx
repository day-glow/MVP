import React, { useState } from 'react';

function Header() {

  return (
    <div>

      <div className="container-header">Home etc</div>
      <br />
      <div className="header-box">
        <div className="header-details">
          <button type='button' className='next-btn' id='home-btn' onClick={() => console.log('HOME')}>home</button>
        </div>
      </div>
      <div>
        <a href="https://twitter.com/intent/tweet?button_hashtag=Motivation&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">Tweet #Motivation</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>

    </div>
  )
}

export default Header;