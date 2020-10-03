import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

export default () => {
  return (
    <nav className='navbar is-fixed-top is-theme-color-1' role='navigation' aria-label='main navigation'>
      <div className='container px-3'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <Link href='/'>
              <a>
                <Icon icon={faFeatherAlt} size='lg' />
              </a>
            </Link>
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item is-uppercase has-text-weight-bold'><Link href='/about'><a className='has-text-white'>about</a></Link></div>
            <div className='navbar-item is-uppercase has-text-weight-bold'><Link href='/portfolio'><a className='has-text-white'>portfolio</a></Link></div>
            <div className='navbar-item is-uppercase has-text-weight-bold'><Link href='/playground/css'><a className='has-text-white'>css</a></Link></div>
          </div>
        </div>
      </div>
    </nav>);
};
