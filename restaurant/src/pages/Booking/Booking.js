import React, { useContext } from 'react';

import { NavLink as Link } from "react-router-dom";
import { BookingContext } from '../../context/BookingContext';

import BookingForm from '../../components/Booking/Booking-form/BookingForm';
import Restaurant from '../../components/Booking/Restaurant/Restaurant';
import BookingMessage from '../../components/Booking/Booking-message/BookingMessage';

const Booking = () => {
  const { resetStateValues } = useContext(BookingContext);

  return (
    <div className="booking">
      < div className="booking__cancel-btn" >
        <Link to="/">
          <span className="fas fa-times" onClick={resetStateValues} />
        </Link>
      </div >
      <BookingForm />
      <Restaurant />
      <BookingMessage />
    </div >
  );
};

export default Booking;