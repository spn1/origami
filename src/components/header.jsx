import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  return router.pathname !== '/playground/css' && (
    <nav className='navbar is-danger is-fixed-top' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <div className='navbar-item'>
            <Link href='/'><a>Skidadle Skidoodle</a></Link>
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-end'>
            <div className='navbar-item'><Link href='/about'><a className=''>about</a></Link></div>
            <div className='navbar-item'><Link href='/portfolio'><a className=''>portfolio</a></Link></div>
            <div className='navbar-item'><Link href='/playground/css'><a className=''>css</a></Link></div>
          </div>
        </div>
      </div>
    </nav>);
};
