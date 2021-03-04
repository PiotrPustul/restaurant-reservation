import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

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
        <div className="message__details message__details--center">
          <span className="message__reservation-nr">
            Reservation number: <span>#{ReservationNumber}</span>
          </span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Name :</span>
          <span className="message__customer-details">{inputsValue.name}</span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Email :</span>
          <span className="message__customer-details">{inputsValue.email}</span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Phone :</span>
          <span className="message__customer-details">{inputsValue.phone}</span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Date :</span>
          <span className="message__customer-details">{date}</span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Time :</span>
          <span className="message__customer-details">
            {timenHours} : {timeMinutes < 10 ? `${timeMinutes}0` : `${timeMinutes}`}
          </span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Covers :</span>
          <span className="message__customer-details">
            {coversAmount}
          </span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Duration :</span>
          <span className="message__customer-details">
            {durationHours}h : {durationMinutes < 10 ? `${durationMinutes}0` : `${durationMinutes}`}min
          </span>
        </div>
        <div className="message__details">
          <span className="message__customer-info">Table :</span>
          <span className="message__customer-details">
            #{tableNr}
          </span>
        </div>
        <button className="message__exit-btn" onClick={closeBookingMessage}>
          Close
        </button>
      </div>
    </div>
  )
}

export default BookingMessage;