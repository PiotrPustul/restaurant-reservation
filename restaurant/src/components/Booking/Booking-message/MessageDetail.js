import React from 'react';

const MessageDetail = ({ title, detail }) => {
   return (
      <div className="booking-message__detail">
         <span className="booking-message__detail__info">{title} :</span>
         <span className="booking-message__detail__data">{detail}</span>
      </div>
   );
};

export default MessageDetail;
