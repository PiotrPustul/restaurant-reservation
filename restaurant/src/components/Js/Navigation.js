import React, { useContext } from 'react';

import { NavContext } from '../../context/NavContext';

const Navigation = () => {

  const { isNavOpen } = useContext(NavContext);

  const showNavigation = () => {
    return isNavOpen ?
      <ul className="navigation__list">
        <li className="list-item">About</li>
        <li className="list-item">Menu</li>
        <li className="list-item">Book</li>
        <li className="list-item">Contact</li>
      </ul>
      :
      null
  }

  return (
    <>
      { showNavigation()}
    </>
  )
}

export default Navigation;