import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

const BookingReservationTable = () => {
  const { tableNr } = useContext(BookingContext);

  return (
    < div className="form__details" >
      <span className="form__label">Tabel</span>
      <span className="form__tabel">{tableNr}</span>
    </div >
  )
}

export default BookingReservationTable;
