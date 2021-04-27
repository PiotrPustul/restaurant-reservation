import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__wrapper">
        <div className="footer__contact">
          <h3>Contact</h3>
          <p>007-555-2021</p>
          <p>123 Fake Street</p>
          <p>London, SW01 1SR</p>
          <p>booking@thelockdown.co.uk</p>
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
          <p>Mon-Thu 12-22</p>
          <p>Fri-Sat 12-23</p>
          <p>Sun 12-22</p>
          <p>
            <Link to="/booking" >
              Make a Reservation
            </Link>
          </p>
        </div>
      </div >
    </div>
  );
};

export default Footer