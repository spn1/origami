import React, { Fragment } from 'react';
import PageHead from '../components/page-head';
import Link from 'next/link';

const headerProps = {
  title: 'Home',
  description: 'The Homepage!'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='hero hero-home is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='container is-max-desktop has-text-light'>
            <div>
              <h1 className='hero-title has-text-centered has-text-weight-medium mb-7'>
                Spencer Newton
              </h1>
            </div>

            <div className='hero-content'>
              <div className='columns is-vcentered column-reverse-columns-tablet mb-7'>
                <div className='column is-four-quarters-tablet'>
                  <div className='has-text-left has-text-weight-medium'>
                    <p className='hero-text'>
                      M.Phys <span className='is-cg-blue-light'>Space Science and Robotics Graduate</span>
                    </p>
                    <p className='hero-text'>
                      Versatile <span className='is-fire-opal'>Software Developer</span>
                    </p>
                    <p className='hero-text'>
                      Based in the <span className='is-peach-puff'>United Kingdom</span>
                    </p>
                  </div>
                </div>
                <div className='column is-one-quarter-tablet is-half-mobile'>
                  <img src='images/react-icon.svg' />
                </div>
              </div>

              <div className='columns is-vcentered is-centered pt-4'>
                <div className='column is-half'>
                  <Link href='/about'>
                    <a className='has-text-light has-text-weight-medium is-3'>
                      &lt; Find out more
                    </a>
                  </Link>
                </div>
                <div className='column is-half has-text-right'>
                  <Link href='/portfolio'>
                    <a className='has-text-light has-text-weight-medium is-3'>
                      See what I&apos;ve created &gt;
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
};
