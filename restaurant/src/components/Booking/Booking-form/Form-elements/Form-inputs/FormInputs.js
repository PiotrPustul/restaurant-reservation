import React, { useContext } from 'react';

import InputForm from './Input-form/InputForm';
import { BookingContext } from '../../../../../context/BookingContext';

const FormInputs = () => {
  const { inputsValue, handleInput } = useContext(BookingContext);

  return (
    <>
      <InputForm title={'Name'} type={'text'} name={'name'} value={inputsValue.name} handleInput={handleInput} />
      <InputForm title={'Email'} type={'email'} name={'email'} value={inputsValue.email} handleInput={handleInput} />
      <InputForm title={'Phone'} type={'number'} name={'phone'} value={inputsValue.phone} handleInput={handleInput} />
    </>
  );
};

export default FormInputs;
