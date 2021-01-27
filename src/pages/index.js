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
            <div className='has-text-right'>
              <h1 className='hero-title has-text-weight-medium'>
                Spencer Newton
              </h1>
            </div>
            <hr className='hero-divider' />
            <div className='hero-content'>
              <div className='columns is-vcentered column-reverse-columns-tablet'>
                <div className='column is-one-third-tablet is-half-mobile'>
                  <img src='images/react-icon.svg' />
                </div>
                <div className='column is-two-thirds-tablet'>
                  <div className='has-text-left'>
                    <p className='has-text-justified-mobile'>👋 Hey there! I&apos;m a Software Developer currently working & living in Leeds. I&apos;m not looking for carrer opportunities right now, but feel free to roam the site, which includes a CV, a portfolio-of-sorts, and other secret areas I use for coding practice 👀.</p>
                  </div>
                </div>
              </div>

              <hr className='hero-divider' />

              <div className='columns is-vcentered is-centered pt-4'>
                <div className='column is-half'>
                  <Link href='/about'>
                    <a>
                      <div className='box' id='about-box'>
                        <h1 className='title'>About</h1>
                        <h2 className='subtitle'>
                          aboooooot meeeeeee
                        </h2>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className='column is-half has-text-right'>
                  <Link href='/portfolio'>
                    <a>
                      <div className='box' id='portfolio-box'>
                        <h1 className='title'>Portfolio</h1>
                        <h2 className='subtitle'>
                          my stoopid apps
                        </h2>
                      </div>
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
