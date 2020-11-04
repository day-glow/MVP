import React from 'react';

function Footer() {

  return (
    <footer className="page-footer">
      <div className="container-footer">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Motivation Comes In Many Forms</h5>
            <p className="grey-text text-lighten-4">Check out more #motivation and spread good vibes!</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!"></a></li>
                <div>
                  <a href="https://twitter.com/intent/tweet?button_hashtag=Motivation&ref_src=twsrc%5Etfw" className="twitter-hashtag-button" data-show-count="false">Tweet #Motivation</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
          © 2014 Copyright Text
        </div>
      </div>
    </footer>
  )
}

export default Footer;