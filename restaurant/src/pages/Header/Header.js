import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';
import Navigation from '../../components/Navigation/Navigation';
import { HANDLE_NAV } from '../../Reducers/actionTypes';

const Header = () => {
  const { state, dispatch } = useContext(BookingContext);
  const { isNavOpen } = state.nav;

  const toggleNavOpen = () => {
    dispatch({ type: HANDLE_NAV });
  };

  return (
    <div className="header ">
      <div className="top-bar">
        <span className={isNavOpen ? "fas fa-times" : "fas fa-bars"} onClick={toggleNavOpen} />
        <div className="header__logo">
          <h6>The</h6>
          <h1>Lockdown</h1>
        </div>
      </div>
      {isNavOpen && <Navigation />}
    </div>
  );
};

export default Header;