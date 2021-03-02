import React, { useState } from 'react';

const BookingReservationCovers = () => {
  const [coversAmount, setCoverAmount] = useState(1);

  const increaseCovers = () => setCoverAmount(prevValue => prevValue + 1);

  const decreaseCovers = () => setCoverAmount(prevValue => prevValue - 1);


  return (
    <>
      <div className="form__details">
        <span className="form__label">Covers</span>
        <span className="form__info">
          {coversAmount}
        </span>
        <div className="form__option">
          {coversAmount <= 1 ?
            <span
              disabled={true}
              class="fas fa-minus-circle disabled" />
            :
            <span
              class="fas fa-minus-circle"
              onClick={decreaseCovers} />
          }
          <span class="fas fa-plus-circle" onClick={increaseCovers} />
        </div>
      </div>
    </>
  )
}


export default BookingReservationCovers;