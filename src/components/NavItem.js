import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ path, title }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? 'active' : '')}
       
      >
         {title}
    </NavLink>
    </li>
  );
};

export default NavItem;
