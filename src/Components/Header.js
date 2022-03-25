import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    // <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/teams">
      Teams
    </NavLink>
  );
}
