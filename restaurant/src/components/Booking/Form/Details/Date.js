import React, { useContext } from 'react';

import { BookingContext } from '../../../../context/BookingContext';
import { HANDLE_CALENDAR } from '../../../../Reducers/actionTypes';

import Backdrop from '../../../Backdrop/Backdrop';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DateValue = () => {
  const { state, dispatch, value, onChange } = useContext(BookingContext);
  const { showCalendar } = state.details;

  const calendarhandler = () => {
    dispatch({ type: HANDLE_CALENDAR });
  };

  return (
    <>
      <div className="form-details">
        <span className="form-details__label">Date</span>
        <span className="form-details__info" onClick={calendarhandler}>{value.toDateString()}</span>
        <div className="form-details__option">
          <span
            className={showCalendar ? "fas fa-arrow-up" : "fas fa-arrow-down"}
            onClick={calendarhandler} />
        </div>
      </div>
      {showCalendar &&
        <Backdrop>
          <div className="form-calendar">
            <span className="form-calendar__close" onClick={calendarhandler}>Close</span>
            <Calendar
              onChange={onChange}
              value={value}
              minDate={new Date()}
            />
          </div>
        </Backdrop>
      }
    </>
  );
};


export default DateValue;