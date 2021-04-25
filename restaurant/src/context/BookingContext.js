import React, { createContext, useState, useReducer } from 'react';

import combineReducers from 'react-combine-reducers';
import inputReducer, { inputsState } from '../Reducers/InputReducer';
import detailsReducer, { detailsState } from '../Reducers/DetailsReducer';

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [rootReducer, initialState] = combineReducers({
    details: [detailsReducer, detailsState],
    inputs: [inputReducer, inputsState]
  });

  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [value, onChange] = useState(new Date());

  const addBookedTable = () => {
    const tableActive = [...document.getElementsByClassName('table--active')];
    const tableInactive = [...document.getElementsByClassName('table--inactive')];

    tableActive.forEach(table => {
      table.classList.remove('table--active');
      table.classList.add('table--booked');
    });

    tableInactive.forEach(table => {
      table.classList.remove('table--inactive');
    });
  };

  return (
    <BookingContext.Provider value={{ state, dispatch, value, onChange, addBookedTable }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;