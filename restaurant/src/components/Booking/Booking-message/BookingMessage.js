import React, { useContext } from 'react';

import { BookingContext } from '../../../context/BookingContext';
import { CONFIRM_BOOKING, RESET_STATE } from '../../../Reducers/actionTypes';

import Backdrop from '../../Backdrop/Backdrop';
import MessageDetail from './MessageDetail';

const BookingMessage = () => {
  const { state, dispatch, value, onChange, addBookedTable } = useContext(BookingContext);
  const { timeHours, timeMinutes, covers, durationHours, durationMinutes, tableNr, confirmBooking } = state.details;
  const { enteredName, enteredEmail, enteredPhone } = state.inputs;

  const ReservationNumber = Math.floor((Math.random() * 100) + 19);

  const closeBookingMessage = () => {
    addBookedTable();
    onChange(new Date());
    dispatch({ type: CONFIRM_BOOKING, confirm: false });
    dispatch({ type: RESET_STATE });
  };

  return (
    confirmBooking &&
    <Backdrop>
      <div className="booking-message">
        <div className="booking-message__wrapper">
          <h1 className="booking-message__heading">
            We are pleased to inform you that your reservation was successful.
          </h1>
          <MessageDetail title={'Name'} detail={enteredName} />
          <MessageDetail title={'Email'} detail={enteredEmail} />
          <MessageDetail title={'Phone'} detail={enteredPhone} />
          <MessageDetail title={'Date'} detail={value.toDateString()} />
          <MessageDetail title={'Time'} detail={`${timeHours} : ${timeMinutes < 10 ? `${timeMinutes}0` : `${timeMinutes}`}`} />
          <MessageDetail title={'Covers'} detail={covers} />
          <MessageDetail title={'Duration'} detail={`${durationHours}h : ${durationMinutes < 10 ? `${durationMinutes}0` : `${durationMinutes}`}min`} />
          <MessageDetail title={'Table'} detail={`#${tableNr}`} />
          <MessageDetail title={'Booking number'} detail={`#${ReservationNumber}`} />
          <button className="booking-message__exit-btn" onClick={closeBookingMessage}>
            Close
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default BookingMessage;