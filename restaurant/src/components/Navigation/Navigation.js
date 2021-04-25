import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import { NavContext } from '../../context/NavContext';

const Navigation = () => {
  const { isNavOpen, toggleNavOpen } = useContext(NavContext);

  return (
    <>
      {isNavOpen &&
        <ul className="navigation-list">
          <li className="navigation-list__item">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={toggleNavOpen}
            >
              About
            </Link>
          </li>
          <li className="navigation-list__item">
            <Link
              activeClass="active"
              to="menu"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={toggleNavOpen}
            >
              Menu
            </Link>
          </li>
          <li className="navigation-list__item">
            <NavLink
              to="/booking"
              onClick={toggleNavOpen}
            >Bookings</NavLink>
          </li>
          <li className="navigation-list__item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onClick={toggleNavOpen}
            >
              Contact
            </Link></li>
        </ul>
      }
    </>
  );
};

export default Navigation;