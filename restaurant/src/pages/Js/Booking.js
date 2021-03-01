import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Booking = () => {
  const [inputsValue, setInputsValue] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [value, onChange] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [timenHours, setTimeHours] = useState(12);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [coversAmount, setCoverAmount] = useState(1);
  const [durationHours, setDurationHours] = useState(1);
  const [durationMinutes, setDurationMinutes] = useState(0);

  const [tablesArr, setTables] = useState(document.getElementsByClassName('table'));
  const [tableNr, setTableNr] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputsValue({
      ...inputsValue,
      [name]: value,
    })
  }

  const date = value.toUTCString().slice(0, 16);

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

  const increaseCoversAmount = () =>
    setCoverAmount(prevValue => prevValue + 1);

  const decreaseCoversAmount = () =>
    setCoverAmount(prevValue => prevValue - 1);

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
    const tables = [...tablesArr];

    tables.forEach(table => {
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

  return (
    <div className="booking">

      <aside className="booking__aside">
        <div className="aside__reservation">

          <h1 className="reservation-heading">Reservation details</h1>

          <div className="reservation__form">

            {/* Name */}
            <div className="form-input__container">
              <span className="form-input__label">Name</span>
              <input type="text" name="name" onChange={handleInput} />
            </div>

            {/* Email */}
            <div className="form-input__container">
              <span className="form-input__label">Email</span>
              <input type="email" name="email" onChange={handleInput} />
            </div>

            {/* Phone */}
            <div className="form-input__container">
              <span className="form-input__label">Phone</span>
              <input type="number" name="phone" onChange={handleInput} />
            </div>

            {/* Date */}
            <div className="form-details__container">
              <span className="form-details__label">Date</span>
              <span className="form-details__info">
                {!value ? null : date}
              </span>
              <div className="form-details__option">
                {showCalendar ?
                  <span
                    class="fas fa-arrow-up"
                    onClick={handleCalendarVisibility}
                  >
                  </span>
                  :
                  <span
                    class="fas fa-arrow-down"
                    onClick={handleCalendarVisibility}
                  >
                  </span>
                }
              </div>
            </div>

            {/* Kalendarz  */}

            {showCalendar ?
              <div className="form__calendar">
                <Calendar
                  onChange={onChange}
                  value={value}
                  minDate={new Date()}
                />
              </div>
              :
              null
            }

            {/* Time */}
            <div className="form-details__container">
              <span className="form-details__label">Time</span>

              {timenHours < 22 ?
                <span className="form-details__info">
                  {timenHours} : {timeMinutes < 10 ? `${timeMinutes}0` : `${timeMinutes}`}
                </span>
                :
                <h2 className="form-details__info text--red">Reservation close</h2>
              }

              <div className="form-details__option">
                {(timenHours <= 12 && timeMinutes === 0) ?
                  <span
                    className="fas fa-minus-circle disabled"
                  />
                  :
                  <span
                    className="fas fa-minus-circle"
                    onClick={decreaseTime}
                  />
                }

                {(timenHours >= 22 && timeMinutes === 0) ?
                  <span
                    className="fas fa-plus-circle disabled"
                  />
                  :
                  <span
                    className="fas fa-plus-circle"
                    onClick={increaseTime}
                  />
                }
              </div>
            </div>

            {/* Covers  */}
            <div className="form-details__container">
              <span className="form-details__label">Covers</span>
              <span className="form-details__info">
                {coversAmount}
              </span>
              <div className="form-details__option">
                {coversAmount <= 1 ?
                  <span
                    disabled={true}
                    class="fas fa-minus-circle disabled" />
                  :
                  <span
                    class="fas fa-minus-circle"
                    onClick={decreaseCoversAmount} />
                }
                <span class="fas fa-plus-circle" onClick={increaseCoversAmount} />
              </div>
            </div>


            {/* Duration */}
            <div className="form-details__container">
              <span className="form-details__label">Duration</span>
              <span className="form-details__info">
                {durationHours}h {durationMinutes < 10 ? `${durationMinutes}0` : durationMinutes}min</span>

              <div className="form-details__option">
                {(durationHours <= 1 && durationMinutes === 0) ?
                  <span className="fas fa-minus-circle disabled" />
                  :
                  <span className="fas fa-minus-circle" onClick={decreaseDuration} />
                }
                <span
                  className="fas fa-plus-circle"
                  onClick={increaseDuration}
                />
              </div>
            </div>

            {/* Tabel */}
            <div className="form-details__container">
              <span className="form-details__label">Tabel</span>
              <span className="form-details__tabel">{tableNr}</span>
            </div>
          </div>
        </div>

      </aside>

      <main className="booking__main">

        <div class="main-restaurant">
          <div className="table-square">
            <span className="table" id="1" onClick={selectTable}>1</span>
          </div>
          <div className="table-square" >
            <span className="table" id="2" onClick={selectTable}>2</span>
          </div>
          <div className="table-square">
            <span className="table" id="3" onClick={selectTable}>3</span>
          </div>
          <div className="table-square" >
            <span className="table" id="4" onClick={selectTable}>4</span>
          </div>
        </div>

        <div class="main-restaurant">
          <div className="table-square" >
            <span className="table" id="5" onClick={selectTable}>5</span>
          </div>
          <div className="table-square">
            <span className="table" id="6" onClick={selectTable}>6</span>
          </div>
          <div className="table-square">
            <span className="table" id="7" onClick={selectTable}>7</span>
          </div>
          <div className="table-square" >
            <span className="table" id="8" onClick={selectTable}>8</span>
          </div>
        </div>

        <div class="main-restaurant">
          <div className="table-square" >
            <span className="table" id="9" onClick={selectTable}>9</span>
          </div>
          <div className="table-square" >
            <span className="table" id="10" onClick={selectTable}>10</span>
          </div>
          <div className="table-square" >
            <span className="table" id="11" onClick={selectTable}>11</span>
          </div>
          <div className="table-square">
            <span className="table" id="12" onClick={selectTable}>12</span>
          </div>
        </div>

      </main>

      <div className="booking__submit">
        <button>
          <span className="submit-text">Book now</span>
          <span className="fas fa-pen-nib"> </span>
        </button>

      </div>


    </div>
  )
}


export default Booking;