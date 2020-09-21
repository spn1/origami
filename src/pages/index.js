import React, { Fragment } from 'react';
import PageHead from '../components/page-head';

const headerProps = {
  title: 'Home',
  description: 'The Homepage!'
};

export default () => {
  return (
    <Fragment>
      <PageHead {...headerProps} />
      <section className='hero o-hero is-dark is-fullheight-with-navbar'>
        <div className='hero-body has-text-centered'>
          <div className='container'>
            <div className='columns is-vcentered is-centered'>
              <div className='column is-one-third'>
                <img src='images/react-icon.svg' />
              </div>
              <div className='column has-text-left is-half'>
                <h1 className='title is-size-1'>Spencer Newton</h1>
                <h2 className='subtitle is-size-3'>
                  Software Developer 👨🏻‍💻
                </h2>
                <p className='is-size-4'>👋 Hello there! I&apos;m a Software Developer currently living in Leeds. Feel free to check out the contents of this site, which includes a CV, a portfolio-of-sorts, a blog that I&apos;ll probably never update, and some secret areas you might be able to find ( ͡° ͜ʖ ͡°)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section is-primary'>
        <div className='container'>
          <div className='columns'>

            {/* About */}
            <div className='column is-large'>
              <div className='py-6'>
                <h1 className='title'>About</h1>
                <h2 className='subtitle'>
                  aboooooot meeeeeee
                </h2>
              </div>
            </div>

            {/* Portfolio */}
            <div className='column has-text-right'>
              <div className='py-6'>
                <h1 className='title'>Portfolio</h1>
                <h2 className='subtitle'>
                  my stoopid apps
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
};
