import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

const BookingTables = () => {
  const { selectTable } = useContext(BookingContext);

  const firstRow = [1, 2, 3, 4];
  const secondRow = [5, 6, 7, 8];
  const thirdRow = [9, 10, 11, 12];

  const createTables = array => {
    return array.map(item => {
      return <div className="booking__table-wrapper">
        <span
          className="booking__table"
          id={item}
          onClick={selectTable}
        >
          {item}
        </span>
      </div>
    })
  }

  return (
    <div className="booking__restaurant">
      <div class="booking__tables">
        {createTables(firstRow)}
      </div>

      <div class="booking__tables">
        {createTables(secondRow)}
      </div>

      <div class="booking__tables">
        {createTables(thirdRow)}
      </div>

    </div>
  )
}

export default BookingTables;