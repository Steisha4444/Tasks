import React from 'react';
import { Outlet,  NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
      <>
    <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/posts'>Posts</NavLink>
      </header>
      <Outlet/>
      </>
  )
}
