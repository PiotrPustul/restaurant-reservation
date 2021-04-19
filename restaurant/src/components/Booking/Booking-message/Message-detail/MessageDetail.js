import React from 'react';

const MessageDetail = ({ title, detail }) => {
   return (
      <div className="message-detail">
         <span className="message-detail__info">{title} :</span>
         <span className="message-detail__data">{detail}</span>
      </div>
   );
};

export default MessageDetail;
