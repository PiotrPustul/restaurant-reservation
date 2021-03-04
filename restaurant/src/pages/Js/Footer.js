import React from 'react';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      < div className="footer__opening-hours" >
        <div>
          <span>OPENING HOURS</span>
        </div>
        <div>
          <span>Monday - Friday</span>
          <span>12.00 - 20.00</span>
        </div>
        <div>
          <span>Saturday - Sunday</span>
          <span>12.00 - 16.00</span>
        </div>
      </div >
      <div className="footer__contact-details">
        <div>
          <span className="fas fa-map-marker-alt"></span>
          <span>01 Big Ben, LONDON SW007</span>
        </div>
        <div>
          <span className="fas fa-phone-alt"></span>
          <span>020 7766 5544</span>
        </div>
        <div>
          <span className="fas fa-envelope"></span>
          <span>Lockdown@Lockdown.co.uk</span>
        </div>
      </div>
    </div >
  )
}


export default Footer