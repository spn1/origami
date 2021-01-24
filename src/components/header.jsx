import React, { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const NavbarItem = ({ href, text }) => (
  <div className='navbar-item is-uppercase has-text-weight-bold'>
    <Link href={href}>
      <a className='has-text-white'>{text}</a>
    </Link>
  </div>
);

const NavbarBurger = ({ isActive, onClick }) => (
  <a role='button' onClick={onClick} className={classnames('navbar-burger', { 'is-active': isActive })} data-target='navMenu' aria-label='menu' aria-expanded='false'>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
  </a>
);

export default () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const burgerOnClick = () => { console.log('clicked borgar'); setIsMobileMenuActive(!isMobileMenuActive); };

  return (
    <nav className='navbar is-fixed-top is-theme-color-1' role='navigation' aria-label='main navigation'>
      <div className='container px-3'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <Link href='/'>
              <a>
                <Icon icon='home' size='lg' />
              </a>
            </Link>
          </div>
          <NavbarBurger onClick={burgerOnClick} isActive={isMobileMenuActive} />
        </div>

        <div className={classnames('navbar-menu', 'is-theme-color-1', { 'is-active': isMobileMenuActive})}>
          <div className='navbar-end'>
            <NavbarItem href='/about' text='about' />
            <NavbarItem href='/portfolio' text='portfolio' />
          </div>
        </div>
      </div>
    </nav>);
};
