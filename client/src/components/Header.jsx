import React from 'react';

function Header() {

  return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Motivation HUB</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#home">Home</a></li>
            <li><a href="#my-likes-page">My Likes</a></li>
            <li><a href="#my-profile-page">My Profile</a></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#quotes">Quote</a></li>
            <li className="tab"><a className="active" href="#songs">Song</a></li>
            <li className="tab disabled"><a href="#videos">Video</a></li>
            <li className="tab"><a href="#social">Social</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;