import React, { useState } from 'react'

const BookingReservationDuration = () => {
  const [durationHours, setDurationHours] = useState(1);
  const [durationMinutes, setDurationMinutes] = useState(0);

  const increaseDuration = () => {
    setDurationMinutes(prevValue => prevValue + 15)

    if (durationMinutes >= 45) {
      setDurationMinutes(0);
      setDurationHours(prevValue => prevValue + 1)
    }
  }

  const decreaseDuration = () => {
    setDurationMinutes(prevValue => prevValue - 15)

    if (durationMinutes <= 0) {
      setDurationMinutes(45);
      setDurationHours(prevValue => prevValue - 1)
    }
  }

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