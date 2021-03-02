import React from 'react';

import BookingReservationInputs from '../../components/Js/BookingReservationInputs';
import BookingReservationDate from '../../components/Js/BookingReservationDate';

const BookingFormReservation = () => {
  return (
    <div className="booking__form">
      <h1 className="form__heading">Reservation details</h1>

      <div className="form__wrapper">
        <BookingReservationInputs />
        <BookingReservationDate />
        {/* <BookingReservationTime /> */}
        {/* <BookingReservationCovers /> */}
        {/* <BookingReservationDuration /> */}
        {/* <BookingReservationTable tableNr={tableNr} /> */}
      </div>
    </div>
  )
}

export default BookingFormReservation;
