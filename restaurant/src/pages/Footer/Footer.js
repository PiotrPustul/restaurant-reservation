import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__wrapper">
        <div className="footer__contact">
          <h3>Contact</h3>
          <span>007-555-2021</span>
          <span>123 Fake Street</span>
          <span>London, SW01 1SR</span>
          <span>booking@thelockdown.co.uk</span>
        </div>
        <div className="footer__block">
          <div className="footer__block__logo">
            <span>the</span>
            <h2>Lockdown</h2>
          </div>
          <div className="footer__block__socials">
            <a
              className="footer__block__socials--instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer">
              <span className="fab fa-instagram" />
            </a>
            <a
              className="footer__block__socials--twitter"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer">
              <span className="fab fa-twitter" />
            </a>
          </div>
        </div>
        <div className="footer__contact">
          <h3>Hours</h3>
          <span>Mon-Thu 12-22</span>
          <span>Fri-Sat 12-23</span>
          <span>Sun 12-22</span>
          <span>
            <Link to="/booking" >
              Make a Reservation
            </Link>
          </span>
        </div>
      </div >
    </div>
  );
};

export default Footer