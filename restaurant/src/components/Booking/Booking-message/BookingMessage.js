import React, { useContext } from 'react';

import MessageDetail from './Message-detail/MessageDetail';

import { BookingContext } from '../../../context/BookingContext';

const BookingMessage = () => {
  const {
    inputsValue,
    date,
    timenHours,
    timeMinutes,
    coversAmount,
    durationHours,
    durationMinutes,
    tableNr,
    confirmBooking,
    closeBookingMessage
  } = useContext(BookingContext);

  const ReservationNumber = Math.floor((Math.random() * 100) + 19);

  return (
    confirmBooking &&
    <div className="booking__message">
      <div className="message__wrapper">
        <h1 className="message__heading">
          We are pleased to inform you that your reservation was successful.
        </h1>
        <MessageDetail title={'Booking number'} detail={`#${ReservationNumber}`} />
        <MessageDetail title={'Name'} detail={inputsValue.name} />
        <MessageDetail title={'Email'} detail={inputsValue.email} />
        <MessageDetail title={'Phone'} detail={inputsValue.phone} />
        <MessageDetail title={'Date'} detail={date} />
        <MessageDetail title={'Time'} detail={`${timenHours} : ${timeMinutes < 10 ? `${timeMinutes}0` : `${timeMinutes}`}`} />
        <MessageDetail title={'Covers'} detail={coversAmount} />
        <MessageDetail title={'Duration'} detail={`${durationHours}h : ${durationMinutes < 10 ? `${durationMinutes}0` : `${durationMinutes}`}min`} />
        <MessageDetail title={'Table'} detail={`#${tableNr}`} />
        <button className="message__exit-btn" onClick={closeBookingMessage}>
          Close
        </button>
      </div>
    </div>
  )
}

export default BookingMessage;