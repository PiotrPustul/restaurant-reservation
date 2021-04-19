import React, { useContext } from 'react';

import { BookingContext } from '../../../context/BookingContext';

import FormInputs from './Form-elements/Form-inputs/FormInputs';
import FormDetails from './Form-elements/Form-details/FormDetails';

const BookingForm = () => {
  const { bookTable } = useContext(BookingContext);

  return (
    <div className="booking__form">
      <h1 className="form__heading">Reservation details</h1>
      <div className="form__wrapper">
        <FormInputs />
        <FormDetails />
        <div className="form__submit-btn">
          <button className="submit-btn" onClick={bookTable}>
            <span className="submit-btn__text">Book now</span>
            <span className="fas fa-pen-nib" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
