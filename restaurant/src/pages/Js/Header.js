import React, { useContext } from 'react';

import { NavContext } from '../../context/NavContext';

const Header = () => {
  const {
    isNavOpen,
    toggleNavOpen,
    screenWidth
  } = useContext(NavContext);

  const showNavigation = () => {
    return isNavOpen ?
      <span className="fas fa-times" onClick={toggleNavOpen}></span>
      :
      <span className="fas fa-bars" onClick={toggleNavOpen}></span>
  }

  return (
    <div className="header">
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
            <span className="fab fa-instagram"></span>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer">
            <span className="fab fa-twitter"></span>
          </a>
        </div>}
    </div>
  )
}

export default Header;

