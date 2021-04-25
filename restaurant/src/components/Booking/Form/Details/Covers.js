import React, { useContext } from 'react';

import { BookingContext } from '../../../../context/BookingContext';
import { INCREASE_COVERS, DECREASE_COVERS } from '../../../../Reducers/actionTypes';

const Covers = () => {
  const { state, dispatch } = useContext(BookingContext);
  const { covers } = state.details;

  const increaseCovers = () => {
    dispatch({ type: INCREASE_COVERS });
  };

  const decreaseCovers = () => {
    dispatch({ type: DECREASE_COVERS });
  };

  return (
    <>
      <div className="form-details">
        <span className="form-details__label">Covers</span>
        <span className="form-details__info">{covers}</span>
        <div className="form-details__option">
          {covers <= 1 ?
            <span disabled={true} className="fas fa-minus-circle disabled" />
            :
            <span className="fas fa-minus-circle" onClick={decreaseCovers} />
          }
          <span className="fas fa-plus-circle" onClick={increaseCovers} />
        </div>
      </div>
    </>
  );
};


export default Covers;