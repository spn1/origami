import React, { useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const NavbarIcon = ({ href, icon }) => (
  <div className='navbar-item'>
    <Link href={href}>
      <Icon icon={icon} size='lg' />
    </Link>
  </div>
);

const NavbarItem = ({ href, text, onClick }) => (
  <div className='navbar-item is-uppercase has-text-weight-bold'>
    <Link href={href} className='has-text-light' onClick={onClick}>
      {text}
    </Link>
  </div>
);

const NavbarBurger = ({ isActive, onClick }) => (
  <a
    role='button'
    onClick={onClick}
    className={classnames('navbar-burger', { 'is-active': isActive })}
    data-target='navMenu'
    aria-label='menu'
    aria-expanded='false'>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
    <span aria-hidden='true'></span>
  </a>
);

export default () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const burgerOnClick = () => setIsMobileMenuActive(!isMobileMenuActive);
  const linkOnClick = () => isMobileMenuActive && setIsMobileMenuActive(!isMobileMenuActive);

  return (
    <nav className='navbar is-fixed-top is-theme-color-1' role='navigation' aria-label='main navigation'>
      <div className='container px-3'>
        <div className='navbar-brand'>
          <NavbarIcon href={'/'} icon='home' />
          <NavbarBurger onClick={burgerOnClick} isActive={isMobileMenuActive} />
        </div>

        <div className={classnames('navbar-menu', 'is-theme-color-1', { 'is-active': isMobileMenuActive})}>
          <div className='navbar-end'>
            <NavbarItem href='/about' text='about' onClick={linkOnClick}/>
            <NavbarItem href='/portfolio' text='portfolio' onClick={linkOnClick}/>
            <NavbarItem href='/bad-ui' text='bad-ui' onClick={linkOnClick}/>
          </div>
        </div>
      </div>
    </nav>);
};
