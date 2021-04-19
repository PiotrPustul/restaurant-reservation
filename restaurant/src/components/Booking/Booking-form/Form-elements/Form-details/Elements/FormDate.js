import React, { useContext } from 'react';

import { BookingContext } from '../../../../../../context/BookingContext';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingReservationDate = () => {
  const { value, onChange, showCalendar, handleCalendarVisibility } = useContext(BookingContext);

  return (
    <>
      <div className="form__details">
        <span className="form__label">Date</span>
        <span className="form__info">{value.toDateString()}</span>
        <div className="form__option">
          <span
            className={showCalendar ? "fas fa-arrow-up" : "fas fa-arrow-down"}
            onClick={handleCalendarVisibility} />
        </div>
      </div>
      {showCalendar && <div className="form__calendar">
        <Calendar
          onChange={onChange}
          value={value}
          minDate={new Date()} />
      </div >}
    </>
  );
};


export default BookingReservationDate;