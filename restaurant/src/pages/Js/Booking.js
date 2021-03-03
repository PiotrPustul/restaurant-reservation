import React, { useContext } from 'react';
import { NavLink as Link } from "react-router-dom";

import { BookingContext } from '../../context/BookingContext';

import BookingForm from '../../components/Js/BookingForm';
import BookingTables from '../../components/Js/BookingTables';

const Booking = () => {
  const { confirmBooking, closeBookingMessage } = useContext(BookingContext);

  return (
    <div className="booking">
      < div className="booking__cancel-btn" >
        <Link to="/">
          <span class="fas fa-times" />
        </Link>
      </div >
      <BookingForm />
      <BookingTables />
      {confirmBooking &&
        <div className="form__message">
          <div>
            <h1>Rezerwacja zaakceptowana</h1>
            <button className="message__exit-btn">
              <span class="fas fa-times" onClick={closeBookingMessage} />
            </button>
          </div>
        </div>
      }
    </div >
  )
}

export default Booking;