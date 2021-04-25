import React, { useContext } from 'react';

import { BookingContext } from '../../../context/BookingContext';
import { NAME_ERROR, EMAIL_ERROR, PHONE_ERROR, CONFIRM_BOOKING } from '../../../Reducers/actionTypes';

import FormInputs from './Inputs/FormInputs'
import FormDetails from './Details/FormDetails'

const BookingForm = () => {
  const { state, dispatch } = useContext(BookingContext);
  const { tableNr } = state.details;
  const { enteredName, enteredEmail, enteredPhone } = state.inputs;

  const bookTable = (e) => {
    const table = document.querySelector('.form-details__table');

    if (enteredName.length < 3) {
      e.preventDefault();
      dispatch({ type: NAME_ERROR, error: 'Please type min 3 characters' });
    } else {
      dispatch({ type: NAME_ERROR, error: null });
    }

    if (!enteredEmail.includes('@')) {
      e.preventDefault()
      dispatch({ type: EMAIL_ERROR, error: 'Invalid email' });
    } else {
      dispatch({ type: EMAIL_ERROR, error: null });
    }

    if (enteredPhone.length !== 10) {
      e.preventDefault();
      dispatch({ type: PHONE_ERROR, error: 'Please type 10 digits' });
    } else {
      dispatch({ type: PHONE_ERROR, error: null });
    }

    if (tableNr === null) {
      e.preventDefault();
      table.classList.add('form-details__table--invalid');
    } else {
      table.classList.remove('form-details__table--invalid');
    }

    if (
      enteredName.length >= 3 &&
      enteredEmail.includes('@') &&
      enteredPhone.length === 10 &&
      tableNr !== null) {
      dispatch({ type: CONFIRM_BOOKING, confirm: true });
    }
  };

  return (
    <div className="form">
      <h1 className="form__heading">Reservation form</h1>
      <div className="form__wrapper">
        <FormInputs />
        <FormDetails />
        <div className="form__submit">
          <button className="form__submit__button" onClick={bookTable}>
            <span className="form__submit__text">Book now</span>
            <span className="fas fa-pen-nib" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
