import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Teams } from './Views/TeamsList';
import './Header.css';
export default function Header() {
  return (
    <NavLink exact to="/">
      Home
    </NavLink>
  );
}
