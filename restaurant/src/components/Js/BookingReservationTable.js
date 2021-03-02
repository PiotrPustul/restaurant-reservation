import React from 'react';

const BookingReservationTable = ({ tableNr }) => {
  return (
    < div className="form__details" >
      <span className="form__label">Tabel</span>
      <span className="form__tabel">{tableNr}</span>
    </div >
  )
}

export default BookingReservationTable;
