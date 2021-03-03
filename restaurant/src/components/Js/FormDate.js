import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingReservationDate = () => {
  const {
    value,
    onChange,
    showCalendar,
    date,
    handleCalendarVisibility } = useContext(BookingContext);

  const showCalendarComponent = () => {
    return (
      showCalendar ?
        <span
          class="fas fa-arrow-up"
          onClick={handleCalendarVisibility}>
        </span>
        :
        <span
          class="fas fa-arrow-down"
          onClick={handleCalendarVisibility}>
        </span>
    )
  }

  const calendarComponent = () => {
    return (
      showCalendar ?
        <div className="form__calendar">
          < Calendar
            onChange={onChange}
            value={value}
            minDate={new Date()}
          />
        </div >
        :
        null
    )
  }

  return (
    <>
      <div className="form__details">
        <span className="form__label">
          Date
        </span>
        <span className="form__info">
          {!value ? null : date}
        </span>
        <div className="form__option">
          {showCalendarComponent()}
        </div>
      </div>
      {calendarComponent()}
    </>
  )
}


export default BookingReservationDate;