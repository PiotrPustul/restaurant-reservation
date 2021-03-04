import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';

const BookingReservationInputs = () => {
  const { inputsValue, handleInput } = useContext(BookingContext);

  return (
    <>
      <div className="form__input">
        <span className="form__input-label">Name</span>
        <input type="text" name="name" value={inputsValue.name} onChange={handleInput} />
      </div>

      <div className="form__input">
        <span className="form__input-label">Email</span>
        <input type="email" name="email" value={inputsValue.email} onChange={handleInput} />
      </div>

      <div className="form__input">
        <span className="form__input-label">Phone</span>
        <input type="number" name="phone" value={inputsValue.phone} onChange={handleInput} />
      </div>
    </>
  )
}

export default BookingReservationInputs;
