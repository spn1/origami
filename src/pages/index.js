import React, { Fragment } from 'react';
import PageHead from '../components/page-head';
import ImageCrossfade from '../components/image-crossfade';
import Link from 'next/link';

const headerProps = {
  title: 'Home',
  description: 'The Homepage!'
};

const techImages = [
  '/images/react-icon.svg',
  '/images/sass-icon.svg',
  '/images/nodejs-icon.svg',
  '/images/cs-icon.svg',
  '/images/cpp-icon.svg',
];

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
              <div className='columns columns-stretch is-vcentered column-reverse-columns-tablet mb-7'>
                <div className='column is-four-quarters-tablet'>
                  <div className='has-text-left has-text-weight-medium'>
                    <p className='hero-text'>
                      M.Phys <span className='is-pastel-blue'>Space Science and Robotics Graduate</span>
                    </p>
                    <p className='hero-text'>
                      Versatile <span className='is-pastel-red'>Software Developer</span>
                    </p>
                    <p className='hero-text'>
                      Based in the <span className='is-pastel-yellow'>United Kingdom</span>
                    </p>
                  </div>
                </div>
                <div className='column is-one-quarter-tablet is-half-mobile'>
                  <figure className='is-square crossfade-image'>
                    <ImageCrossfade images={techImages} classNames={'crossfade-image'}/>
                  </figure>
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
