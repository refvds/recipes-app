import { useState, useEffect } from 'react'

import { headerNavData } from './headerData';
import { Nav } from '../Nav';

import './header.scss';


export const Header = ({ }) => {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenuBtn = () => {
    setMenu(prevState => !prevState);
  }

  return (
    <header className='header'>
      <div className="header__wrapper">
        {
          isMenuOpen
            ? <button className='header__burger-menu-close-btn' onClick={handleMenuBtn}><img src='menu/burger-close.svg' /></button>
            : <button className='header__burger-menu-btn' onClick={handleMenuBtn}><img src='menu/burger-menu.svg' /></button>
        }
        <img src="logos/test1.png" alt="logo" />
        <Nav style={`header__nav ${isMenuOpen ? 'header__burger-menu' : ''}`} data={headerNavData} />
      </div>
    </header>
  )
}
