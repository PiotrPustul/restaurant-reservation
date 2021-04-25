import React, { useContext } from 'react';

import { BookingContext } from '../../../../context/BookingContext';

const Table = () => {
  const { state } = useContext(BookingContext);
  const { tableNr } = state.details;

  return (
    <>
      < div className="form-details" >
        <span className="form-details__label">Tabel</span>
        <span className="form-details__table">{tableNr}</span>
      </div >
    </>
  );
};

export default Table;
