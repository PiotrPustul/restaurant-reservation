import React, { createContext, useState, useEffect } from 'react';

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleNavOpen = () => setIsNavOpen(prevValue => !prevValue);

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
      }}>
      {children}
    </NavContext.Provider>
  )
};

export default NavProvider;