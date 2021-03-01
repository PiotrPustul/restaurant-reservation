import React, { useContext } from 'react';

import { NavContext } from '../../context/NavContext';

const Header = () => {
  const {
    isNavOpen,
    toggleNavOpen,
    screenWidth,
    bookingHandler
  } = useContext(NavContext);

  const showNavigation = () => {
    return isNavOpen ?
      <span className="fas fa-times" onClick={toggleNavOpen} />
      :
      <span className="fas fa-bars" onClick={toggleNavOpen} />
  }

  return (
    <div className="header ">
      <div className="header__hamburger">
        {showNavigation()}
      </div>
      <div className="header__logo">
        <h6>The</h6>
        <h1>Lockdown</h1>
      </div>
      {screenWidth > 767 &&
        <div className="header__socials">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer">
            <span className="fab fa-instagram" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer">
            <span className="fab fa-twitter" />
          </a>
        </div>}
      <div className="header__book-btn" onClick={bookingHandler}>
        <i class="fas fa-book-open"></i>
        <span className="book-text">Bookings</span>
      </div>
    </div>
  )
}

export default Header;

