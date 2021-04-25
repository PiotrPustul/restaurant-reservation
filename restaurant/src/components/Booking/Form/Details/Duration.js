import React, { useContext } from 'react';

import { BookingContext } from '../../../../context/BookingContext';
import { INCREASE_DURATION, DECREASE_DURATION } from '../../../../Reducers/actionTypes';

const Duration = () => {
  const { state, dispatch } = useContext(BookingContext);
  const { durationHours, durationMinutes } = state.details;

  const increaseDuration = () => {
    let minutes = durationMinutes + 15;
    let hour = durationHours;
    if (minutes > 45) {
      minutes = 0;
      hour = durationHours + 1;
    }
    dispatch({ type: INCREASE_DURATION, payload: { hour, minutes, } });
  };

  const decreaseDuration = () => {
    let minutes = durationMinutes - 15;
    let hour = durationHours;
    if (minutes < 0) {
      minutes = 45;
      hour = durationHours - 1;
    }
    dispatch({ type: DECREASE_DURATION, payload: { hour, minutes, } });
  };

  return (
    <div className="form-details">
      <span className="form-details__label">Duration</span>
      <span className="form-details__info">{durationHours}h {durationMinutes < 10 ? `${durationMinutes}0` : durationMinutes}min</span>

      <div className="form-details__option">
        {(durationHours <= 1 && durationMinutes === 0) ?
          <span className="fas fa-minus-circle disabled" /> :
          <span className="fas fa-minus-circle" onClick={decreaseDuration} />
        }

        <span className="fas fa-plus-circle" onClick={increaseDuration} />
      </div>
    </div>
  );
};

export default Duration;