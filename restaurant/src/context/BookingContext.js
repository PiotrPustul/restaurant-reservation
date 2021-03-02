import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [tables, setTables] = useState(document.getElementsByClassName('booking__table'));
  const [tableNr, setTableNr] = useState('');
  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const date = value.toUTCString().slice(0, 16);



  const selectTable = (e) => {
    const tablesArr = [...tables];

    tablesArr.forEach(table => {
      const id = e.target.id;

      if (id === table.id) {
        table.classList.toggle("table--active");

        setTableNr(prevValue => prevValue === id ? '' : id);
      }

      if (id !== table.id) {
        table.classList.toggle("table--inactive");
      }
    })
  }
  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputsValue({
      ...inputsValue,
      [name]: value,
    })
  }
  const handleCalendarVisibility = () => setShowCalendar(prevValue => !prevValue);

  return (
    <BookingContext.Provider
      value={{
        tables,
        tableNr,
        selectTable,
        inputsValue,
        handleInput,
        value,
        onChange,
        showCalendar,
        date,
        handleCalendarVisibility,
      }}>
      {children}
    </BookingContext.Provider>
  )
};

export default BookingProvider;