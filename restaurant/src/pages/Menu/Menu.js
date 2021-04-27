import React, { useContext } from 'react';

import { BookingContext } from '../../context/BookingContext';
import MealPosition from './MealPosition';

const Menu = () => {
  const { menu } = useContext(BookingContext);
  const { starters, shares, mains, puddings } = menu;

  return (
    <div className="menu" id="menu">
      <h1>MAIN MENU</h1>
      <div className="menu__wrapper">
        <MealPosition position={starters} title={'SMALL DISHES & LIGHT BITES'} />
        <MealPosition position={shares} title={'SHARES'} />
        <MealPosition position={mains} title={'MAINS'} />
        <MealPosition position={puddings} title={'PUDDINGS'} />
      </div>
    </div>
  );
};

export default Menu;