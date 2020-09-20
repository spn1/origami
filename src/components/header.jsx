import React from 'react';
import Link from 'next/link';

export default () => {
  return (
    <nav className='navbar is-dark is-fixed-top' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <Link href='/'><a className='has-text-white has-text-weight-bold'>S·N</a></Link>
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'><Link href='/about'><a className='has-text-white has-text-weight-bold'>about</a></Link></div>
            <div className='navbar-item'><Link href='/portfolio'><a className='has-text-white has-text-weight-bold'>portfolio</a></Link></div>
            <div className='navbar-item'><Link href='/playground/css'><a className='has-text-white has-text-weight-bold'>css</a></Link></div>
          </div>
        </div>
      </div>
    </nav>);
};
