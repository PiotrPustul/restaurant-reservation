import React, { useContext } from 'react';

import { BookingContext } from '../../../../context/BookingContext';
import { INCREASE_TIME, DECREASE_TIME } from '../../../../Reducers/actionTypes';

const Time = () => {
  const { state, dispatch } = useContext(BookingContext);
  const { timeHours, timeMinutes } = state.details;

  const increaseTime = () => {
    let minutes = timeMinutes + 15;
    let hour = timeHours;
    if (minutes > 45) {
      minutes = 0;
      hour = timeHours + 1;
    }
    dispatch({ type: INCREASE_TIME, payload: { hour, minutes, } });
  };

  const decreaseTime = () => {
    let minutes = timeMinutes - 15;
    let hour = timeHours;
    if (minutes < 0) {
      minutes = 45;
      hour = timeHours - 1;
    }
    dispatch({ type: DECREASE_TIME, payload: { hour, minutes, } });
  };

  return (
    <div className="form-details">
      <span className="form-details__label">Time</span>
      {timeHours < 20 ?
        <span className="form-details__info">{timeHours} : {timeMinutes < 10 ? `${timeMinutes}0` : `${timeMinutes}`}</span>
        :
        <h2 className="form-details__info text--red">Reservation close</h2>
      }

      <div className="form-details__option">
        {(timeHours <= 12 && timeMinutes === 0) ?
          <span className="fas fa-minus-circle disabled" /> :
          <span className="fas fa-minus-circle" onClick={decreaseTime} />}

        {(timeHours >= 20 && timeMinutes === 0) ?
          <span className="fas fa-plus-circle disabled" /> :
          <span className="fas fa-plus-circle" onClick={increaseTime} />}
      </div>
    </div >
  );
};

export default Time;