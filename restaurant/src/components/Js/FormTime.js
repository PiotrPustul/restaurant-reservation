import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

const BookingReservationTime = () => {
  const {
    timenHours,
    timeMinutes,
    increaseTime,
    decreaseTime
  } = useContext(BookingContext);

  return (
    <>
      {/* Time */}
      <div className="form__details">
        <span className="form__label">Time</span>

        {timenHours < 22 ?
          <span className="form__info">
            {timenHours} : {timeMinutes < 10 ? `${timeMinutes}0` : `${timeMinutes}`}
          </span>
          :
          <h2 className="form__info text--red">Reservation close</h2>
        }

        <div className="form__option">
          {(timenHours <= 12 && timeMinutes === 0) ?
            <span
              className="fas fa-minus-circle disabled"
            />
            :
            <span
              className="fas fa-minus-circle"
              onClick={decreaseTime}
            />
          }

          {(timenHours >= 22 && timeMinutes === 0) ?
            <span
              className="fas fa-plus-circle disabled"
            />
            :
            <span
              className="fas fa-plus-circle"
              onClick={increaseTime}
            />
          }
        </div>
      </div>
    </>
  )
}


export default BookingReservationTime;