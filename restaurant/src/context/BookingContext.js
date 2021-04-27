import React, { createContext, useEffect, useReducer, useState } from 'react';

import { rootReducer, initialState } from '../Reducers/rootReducer';


export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const [menu, setMenu] = useState({
    starters: [],
    shares: [],
    mains: [],
    puddings: [],
  });
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

  const getData = () => {
    fetch('db.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setMenu({
          starters: data.starters,
          shares: data.shares,
          mains: data.mains,
          puddings: data.puddings,
        });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BookingContext.Provider value={{ state, dispatch, value, onChange, addBookedTable, menu }}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;