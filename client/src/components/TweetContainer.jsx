import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function TweetContainer({ nextTweet, getNextTweet, count }) {

  const [tweetId, setTweetId] = useState('440322224407314432');
  const [tweetUser, setTweetUser] = useState('TheEllenShow');
  const [href, setHref] = useState('');
  const [block, setBlock] = useState('');

  // setBlock(<div>
  //   <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Only Good Vibes! ❤️🙏<a href="https://twitter.com/hashtag/Motivation?src=hash&amp;ref_src=twsrc%5Etfw">#Motivation</a> <a href="https://twitter.com/hashtag/PositiveVibes?src=hash&amp;ref_src=twsrc%5Etfw">#PositiveVibes</a> <a href="https://twitter.com/hashtag/wellnessprojectbykalia?src=hash&amp;ref_src=twsrc%5Etfw">#wellnessprojectbykalia</a> <a href="https://t.co/emsBp2trhe">pic.twitter.com/emsBp2trhe</a></p>&mdash; Kalia Nikolaou (@KaliaNikolaou) <a href="https://twitter.com/KaliaNikolaou/status/1322985647364313089?ref_src=twsrc%5Etfw">November 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  //   </div>)
  useEffect(() => {
    setTweetId(nextTweet.data[0].id);
    setTweetUser(nextTweet.includes.users[0].username);
    setHref(`https://twitter.com/${tweetUser}/status/${tweetId}`);
    console.log(href)
    // document.getElementById('twitter-card').append({`<blockquote className="twitter-tweet"><a href=${href}></a></blockquote>`});
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

  useEffect (() => {
    if (count === 0) {
      setBlock(
        <div>
        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Only Good Vibes! ❤️🙏<a href="https://twitter.com/hashtag/Motivation?src=hash&amp;ref_src=twsrc%5Etfw">#Motivation</a> <a href="https://twitter.com/hashtag/PositiveVibes?src=hash&amp;ref_src=twsrc%5Etfw">#PositiveVibes</a> <a href="https://twitter.com/hashtag/wellnessprojectbykalia?src=hash&amp;ref_src=twsrc%5Etfw">#wellnessprojectbykalia</a> <a href="https://t.co/emsBp2trhe">pic.twitter.com/emsBp2trhe</a></p>&mdash; Kalia Nikolaou (@KaliaNikolaou) <a href="https://twitter.com/KaliaNikolaou/status/1322985647364313089?ref_src=twsrc%5Etfw">November 1, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      )
    } else if (count === 1) {
      setBlock(
        <TwitterTweetEmbed
        tweetId={tweetId}
      />
      )
    } else if (count === 2) {
      setBlock(
        <div>
          <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Workout complete for the day! <a href="https://twitter.com/hashtag/fitmom?src=hash&amp;ref_src=twsrc%5Etfw">#fitmom</a> <a href="https://twitter.com/hashtag/Motivation?src=hash&amp;ref_src=twsrc%5Etfw">#Motivation</a> <a href="https://t.co/BZn3Ts9HtC">pic.twitter.com/BZn3Ts9HtC</a></p>&mdash; Michele Boshears (@cheleboshears) <a href="https://twitter.com/cheleboshears/status/1323606518110060544?ref_src=twsrc%5Etfw">November 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
      )
    }
    {/* <blockquote className="twitter-tweet"><a href={href}></a></blockquote>
      <script src="//platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
  }, [count])
  return (
    <div className='twitter-section'>
      <div id='twitter-card'>
        <div>
          {block}
        </div>
        <div className='align-center'>
            <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn align-center' id='tweet-btn' onClick={() => getNextTweet()}><i class="material-icons">arrow_forward</i></button>
            <button type='button' className='btn-floating btn-large waves-effect waves-light next-btn align-right like' id='like-btn' onClick={() => 'addLike()'}><i class="material-icons">favorite_border</i>
            </button>
        </div>
      </div>
    </div>
  )
}

export default TweetContainer;