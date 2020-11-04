import React, { useState, useEffect } from 'react';

function TweetContainer({ nextTweet, getNextTweet}) {

  const [tweetId, setTweetId] = useState('440322224407314432');
  const [tweetUser, setTweetUser] = useState('TheEllenShow');
  const [href, setHref] = useState('')

  useEffect(() => {
    setTweetId(nextTweet.data[0].id);
    setTweetUser(nextTweet.includes.users[0].username);
    setHref(`https://twitter.com/${tweetUser}/status/${tweetId}`);
    console.log(href)
  }, [nextTweet])

  if (nextTweet === '') {
    return (
      <div className="container-tweet">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='align-center'>
          <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn align-center' id='tweet-btn' onClick={() => getNextTweet()}>>></button>
        </div>
      <div>
        <blockquote className="twitter-tweet"><a href={href}></a></blockquote>
        <script src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    </div>
  )

}

export default TweetContainer;