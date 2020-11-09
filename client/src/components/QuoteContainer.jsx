import React, { useState } from 'react';

function QuoteContainer({ nextQuote, getNextQuote}) {

  // const [video, setVideo] = useState('');
  // const [videoTitle, setVideoTitle] = useState('');
  // const [videoDescription, setVideoDescription] = useState('');
  // const [videoSrc, setVideoSrc] = useState('');

  return (
    <div>
      <div className="container-quote align-center">
        <div className="quote-box align-center">
          <div className="quote-details">
            <div className="row">
              <div className="s12 m5">
                <div className="card-panel teal align-center">
                  <span className="white-text">
                    {`\" ${nextQuote.body} \"`}
                    <br />
                    <span className="align-right">{`-${nextQuote.author}`}</span>
                    <br />
                  </span>
                </div>
                <div>
                  <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn align-center' id='quote-btn' onClick={() => getNextQuote()}><i class="material-icons">arrow_forward</i></button>
                  <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn align-right like' id='like-btn' onClick={() => 'addLike()'}><i class="material-icons">favorite_border</i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
          <ul class="pagination">
            <li class="disabled"><a href="#!"><i class="material-icons"></i></a></li>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
            <li class="waves-effect"><a href="#!"><i class="material-icons"></i></a></li>
          </ul>
      </div> */}
    </div>
  )
}

export default QuoteContainer;