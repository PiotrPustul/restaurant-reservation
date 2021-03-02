import React, { createContext, useState, useEffect } from 'react';

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [booking, setBooking] = useState(false);

  const toggleNavOpen = () => setIsNavOpen(prevValue => !prevValue);
  const bookingHandler = () => setBooking(prevValue => !prevValue);

  useEffect(() => {
    function updateSize() {
      setScreenWidth(prevValue => window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    return screenWidth;
  })

  return (
    <NavContext.Provider
      value={{
        isNavOpen,
        toggleNavOpen,
        screenWidth,
        booking,
        bookingHandler
      }}>
      {children}
    </NavContext.Provider>
  )
};

export default NavProvider;