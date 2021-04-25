import React, { useContext } from 'react';

import { NavLink as Link } from "react-router-dom";
import { BookingContext } from '../../context/BookingContext';
import { RESET_STATE } from '../../Reducers/actionTypes';

import BookingForm from '../../components/Booking/Form/BookingForm';
import Restaurant from '../../components/Booking/Restaurant/Restaurant';
import BookingMessage from '../../components/Booking/Booking-message/BookingMessage';

const Booking = () => {
  const { state, dispatch, onChange } = useContext(BookingContext);
  const { confirmBooking } = state.details;

  const closeBookingMessage = () => {
    onChange(new Date());
    dispatch({ type: RESET_STATE });
  };

  return (
    <div className="booking">
      < div className="booking__cancel-btn" >
        <Link to="/">
          <span className="fas fa-times" onClick={closeBookingMessage} />
        </Link>
      </div >
      <BookingForm />
      <Restaurant />
      {confirmBooking && <BookingMessage />}
    </div >
  );
};

export default Booking;