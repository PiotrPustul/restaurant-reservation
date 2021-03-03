import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

const BookingReservationDuration = () => {
  const {
    durationHours,
    durationMinutes,
    increaseDuration,
    decreaseDuration
  } = useContext(BookingContext);

  return (
    <div className="form__details">
      <span className="form__label">
        Duration
      </span>
      <span className="form__info">
        {durationHours}h {durationMinutes < 10 ? `${durationMinutes}0` : durationMinutes}min
      </span>

      <div className="form__option">
        {(durationHours <= 1 && durationMinutes === 0) ?
          <span className="fas fa-minus-circle disabled" />
          :
          <span className="fas fa-minus-circle" onClick={decreaseDuration} />
        }
        <span
          className="fas fa-plus-circle"
          onClick={increaseDuration}
        />
      </div>
    </div>
  )
}


export default BookingReservationDuration;