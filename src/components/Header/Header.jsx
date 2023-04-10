import React from 'react'

import { Link, Outlet } from 'react-router-dom';

import './header.scss';

export const Header = ({ }) => {
  return (
    <header className='header'>
        
      <Outlet />
    </header>
  )
}
