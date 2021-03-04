import React from 'react';
import { NavLink as Link } from "react-router-dom";

import BookingForm from '../../components/Js/BookingForm';
import BookingTables from '../../components/Js/BookingTables';
import BookingMessage from '../../components/Js/BookingMessage';

const Booking = () => {
  return (
    <div className="booking">
      < div className="booking__cancel-btn" >
        <Link to="/">
          <span className="fas fa-times" />
        </Link>
      </div >
      <BookingForm />
      <BookingTables />
      <BookingMessage />
    </div >
  )
}

export default Booking;