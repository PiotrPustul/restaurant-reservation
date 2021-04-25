import React, { useContext } from 'react';

import { BookingContext } from '../../../../context/BookingContext';
import { NAME_INPUT, EMAIL_INPUT, PHONE_INPUT } from '../../../../Reducers/actionTypes';

import Input from './Input';

const FormInputs = () => {
  const { state, dispatch } = useContext(BookingContext);
  const { enteredName, enteredEmail, enteredPhone, errorName, errorEmail, errorPhone } = state.inputs;

  const nameChangeHandler = (event) => {
    const value = event.target.value;
    dispatch({ type: NAME_INPUT, value });
  };

  const emailChangeHandler = (event) => {
    const value = event.target.value;
    dispatch({ type: EMAIL_INPUT, value });
  };

  const phoneChangeHandler = (event) => {
    const value = event.target.value;
    dispatch({ type: PHONE_INPUT, value });
  };

  return (
    <>
      <Input
        title={'Name'}
        type={'text'}
        name={'name'}
        id={'name'}
        handleInput={nameChangeHandler}
        value={enteredName}
        error={errorName}
      />
      <Input
        title={'Email'}
        type={'email'}
        name={'email'}
        id={'email'}
        handleInput={emailChangeHandler}
        value={enteredEmail}
        error={errorEmail}
      />
      <Input
        title={'Phone'}
        type={'number'}
        name={'phone'}
        id={'phone'}
        handleInput={phoneChangeHandler}
        value={enteredPhone}
        error={errorPhone}
      />
    </>
  );
};

export default FormInputs;
