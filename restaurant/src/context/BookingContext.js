import React, { createContext, useEffect, useState } from 'react';

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [value, onChange] = useState(new Date());
  const date = value.toUTCString().slice(0, 16);
  const [showCalendar, setShowCalendar] = useState(false);

  const [timenHours, setTimeHours] = useState(12);
  const [timeMinutes, setTimeMinutes] = useState(0);

  const [coversAmount, setCoverAmount] = useState(1);

  const [durationHours, setDurationHours] = useState(1);
  const [durationMinutes, setDurationMinutes] = useState(0);

  const allTables = [...document.getElementsByClassName('booking__table')];
  const [tableNr, setTableNr] = useState('');

  const [confirmBooking, setConfirmBooking] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputsValue({
      ...inputsValue,
      [name]: value,
    })
  }
  const handleCalendarVisibility = () => setShowCalendar(prevValue => !prevValue);

  const increaseTime = () => {
    setTimeMinutes(prevValue => prevValue + 15)

    if (timeMinutes >= 45) {
      setTimeMinutes(0);
      setTimeHours(prevValue => prevValue + 1)
    }
  }
  const decreaseTime = () => {
    setTimeMinutes(prevValue => prevValue - 15)

    if (timeMinutes <= 0) {
      setTimeMinutes(45);
      setTimeHours(prevValue => prevValue - 1)
    }
  }

  const increaseCovers = () => setCoverAmount(prevValue => prevValue + 1);
  const decreaseCovers = () => setCoverAmount(prevValue => prevValue - 1);

  const increaseDuration = () => {
    setDurationMinutes(prevValue => prevValue + 15)

    if (durationMinutes >= 45) {
      setDurationMinutes(0);
      setDurationHours(prevValue => prevValue + 1)
    }
  }
  const decreaseDuration = () => {
    setDurationMinutes(prevValue => prevValue - 15)

    if (durationMinutes <= 0) {
      setDurationMinutes(45);
      setDurationHours(prevValue => prevValue - 1)
    }
  }

  const selectTable = (e) => {
    allTables.forEach(table => {
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

  useEffect(() => {
    const name = inputsValue.name
    const email = inputsValue.email
    const phone = inputsValue.phone
    const submitBtn = document.querySelector(".submit-btn");

    if (name !== '' && email !== '' && phone !== '' && tableNr !== '') {
      submitBtn.classList.toggle("submit-btn--active");
    }

    if (name === '' || email === '' || phone === '' || tableNr === '') {
      submitBtn.classList.remove("submit-btn--active");
    }
  }, [inputsValue, tableNr])

  const bookTable = (e) => {
    e.preventDefault();
    const name = inputsValue.name;
    const email = inputsValue.email;
    const phone = inputsValue.phone;
    const bookingForm = document.querySelector('.booking__form');
    const bookingTables = document.querySelector('.booking__restaurant');
    const bookingCancelBtn = document.querySelector('.booking__cancel-btn');

    if (name !== '' && email !== '' && phone !== '' && tableNr !== '') {
      setConfirmBooking(true);
      bookingForm.classList.add('block');
      bookingTables.classList.add('block');
      bookingCancelBtn.classList.add('block');
    }
  }

  const resetStateValues = () => {
    setTimeHours(prevValue => 12);
    setTimeMinutes(prevValue => 0);
    onChange(new Date());
    setCoverAmount(prevValue => 1);
    setDurationHours(prevValue => 1);
    setDurationMinutes(prevValue => 0);
    setTableNr(prevValue => '');
    setConfirmBooking(false);
  }

  const removeTablesClass = () => {
    const tableActive = [...document.getElementsByClassName('table--active')];
    const tableInactive = [...document.getElementsByClassName('table--inactive')];

    tableActive.forEach(table => {
      table.classList.remove('table--active');
      table.classList.add('table--booked');
    })

    tableInactive.forEach(table => {
      table.classList.remove('table--inactive');
    })
  }

  const closeBookingMessage = () => {
    const bookingForm = document.querySelector('.booking__form');
    const bookingTables = document.querySelector('.booking__restaurant');
    const bookingCancelBtn = document.querySelector('.booking__cancel-btn');

    bookingForm.classList.remove('block');
    bookingTables.classList.remove('block');
    bookingCancelBtn.classList.remove('block');

    resetStateValues()
    removeTablesClass()
  }

  return (
    <BookingContext.Provider
      value={{
        inputsValue,
        handleInput,

        value,
        date,
        onChange,
        showCalendar,
        handleCalendarVisibility,

        timenHours,
        timeMinutes,
        increaseTime,
        decreaseTime,

        coversAmount,
        increaseCovers,
        decreaseCovers,

        durationHours,
        durationMinutes,
        increaseDuration,
        decreaseDuration,

        tableNr,
        selectTable,

        confirmBooking,
        bookTable,
        closeBookingMessage,
      }}>
      {children}
    </BookingContext.Provider>
  )
};

export default BookingProvider;